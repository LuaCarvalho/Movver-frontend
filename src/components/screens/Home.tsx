import React, { useContext, useEffect, useRef, useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

import { useNavigation } from "@react-navigation/core";

import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import MapView, { Region } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

import { googleApi } from "../../services/config/index";
import { LocationProvider, useLocationContext } from "../../context/LocationContext";

const Home: React.FC = () => {
  const { origin, destination, setDistance } = useLocationContext();
  const mapRef = useRef<any>(null);
  const { navigate } = useNavigation();
  const [actualLocation, setActualLocation] = useState<Region>();

  useEffect(() => {
    (async function () {
      //Pede permissão para acessar a localizão
      const { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status === "granted") {
        const {
          coords: { latitude, longitude },
        } = await Location.getCurrentPositionAsync({
          accuracy: Location.LocationAccuracy.High,
        });
        setActualLocation({
          latitude,
          longitude,
          longitudeDelta: 0.000922,
          latitudeDelta: 0.000421,
        });
      } else throw new Error("Location permission not granted");
    })();
  });

  return (
    <>
      <MapView
        style={styles.map}
        initialRegion={origin ? origin.region : actualLocation}
        showsUserLocation
        loadingEnabled
        ref={mapRef}
      >
        {destination && (
          <MapViewDirections
            origin={origin.region}
            destination={destination.region}
            apikey={googleApi}
            strokeWidth={3}
            onReady={result => {
              setDistance(result.distance);
              mapRef.current.fitToCoordinates(result.coordinates, {
                edgePadding: {
                  bottom: 50,
                  top: 50,
                  left: 50,
                  right: 50,
                },
              });
            }}
          />
        )}
      </MapView>
      <View onTouchStart={() => navigate("FindDriver")} style={styles.findButton}>
        <Text>Buscar?</Text>
      </View>
    </>
  );
};

export default Home;

const height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  findButton: {
    top: -(height / 1.25),
    height: 50,
    borderRadius: 50,
    elevation: 10,
    margin: 10,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});

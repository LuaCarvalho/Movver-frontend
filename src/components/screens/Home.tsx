/** Painel principal do app
 */
import React, { useEffect, useRef, useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

import MapView, { Region } from "react-native-maps";

import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import MapViewDirections from "react-native-maps-directions";

import { googleApi } from "../../services/config/index";
import NavigatorButton from "../widgets/NavigatorButton";
import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";

const Home: React.FC = () => {
  const mapRef = useRef<any>(null);
  const [origin, setOrigin] = useState<Region>();
  const [actualLocation, setActualLocation] = useState<Region>();
  const [destination, setDestination] = useState<Region>();
  const [distance, setDistance] = useState(0);
  const { navigate } = useNavigation();

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
        initialRegion={origin ? origin : actualLocation}
        showsUserLocation
        loadingEnabled
        ref={mapRef}
      >
        {destination && (
          <MapViewDirections
            origin={origin}
            destination={destination}
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
        <Text
          style={{
            opacity: 0.5,
          }}
        >
          Buscar?
        </Text>
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

import React, { useEffect, useRef, useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

import { useNavigation } from "@react-navigation/core";

import MapView from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

import { googleApi } from "../../domain/services/config";

import { useLocationContext } from "../../context/LocationContext";
import { directionEnum } from "../../domain/model/types/enums";
import { getCurrentLocation } from "../../domain/services/location";

const Home: React.FC = () => {
  const { origin, destination, addLocation, addDistance } = useLocationContext();
  const mapRef = useRef<any>(null);
  const { navigate } = useNavigation();

  //Inicialmente o mapa irá mostrar a localização atual
  useEffect(() => {
    (async function () {
      const location = await getCurrentLocation(directionEnum.ORIGIN);
      addLocation(location);
    })();
  }, []);

  return (
    <>
      <MapView
        style={styles.map}
        initialRegion={origin.region}
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
              addDistance(result.distance);
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

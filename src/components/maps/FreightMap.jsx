/** Painel principal do app
 */
import React, { useEffect, useRef, useState } from "react";
import { View } from "react-native";

import MapView, { Region } from "react-native-maps";

import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import MapViewDirections from "react-native-maps-directions";

import appCss from "../../styles/app.css";
import mapCss from "../../styles/map.css";

import config from "../../services/config/index.json";

import AutoCompleteMap from "./AutoCompleteMap";

export default () => {
  const mapRef = useRef(null);

  const [origin, setOrigin] = useState();
  const [destination, setDestination] = useState();
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    (async function () {
      //Pede permissão para acessar a localizão
      const { status, permissions } = await Permissions.askAsync(
        Permissions.LOCATION
      );
      if (status === "granted") {
        const {
          coords: { latitude, longitude },
        } = await Location.getCurrentPositionAsync({
          accuracy: Location.LocationAccuracy.High,
        });
        setOrigin({
          latitude,
          longitude,
          longitudeDelta: 0.000922,
          latitudeDelta: 0.000421,
        });
      } else throw new Error("Location permission not granted");
    })();
  });

  return (
    <View style={appCss.container}>
      <View style={appCss.search}>
        <AutoCompleteMap name="Origem" setLocation={setOrigin} />
        <AutoCompleteMap name="Destino" setLocation={setDestination} />
      </View>
      <MapView
        style={mapCss.map}
        initialRegion={origin}
        showsUserLocation
        loadingEnabled
        ref={mapRef}
      >
        {destination && (
          <MapViewDirections
            origin={origin}
            destination={destination}
            apikey={config.googleApi}
            strokeWidth={3}
            onReady={(result) => {
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
    </View>
  );
};

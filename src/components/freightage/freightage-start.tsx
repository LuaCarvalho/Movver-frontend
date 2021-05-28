import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import React, { useRef, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MapView from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useFreightContext } from "../../context/freight-context";
import { useLocationContext } from "../../context/location-context";
import { googleApi } from "../../domain/services/config";
import { appCss } from "../../styles/app.css";
import { grey } from "../../styles/color.css";
import { MvButton } from "../widgets/mv-button";
import { FreightageConfirm } from "./freightage-confirm";
import { FreightageForm } from "./freightage-form";

export function FreightageStart() {
  const Navigation = useNavigation();
  const FreightContext = useFreightContext();
  const LocationContext = useLocationContext();
  const [isConfirmed, setIsConfirmed] = useState(false);

  const mapRef = useRef<any>(null);

  const activeColor = () => (FreightContext.isReadyToStart ? "white" : grey.lighten);

  return (
    <SafeAreaView style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={LocationContext.origin}
        showsUserLocation
        loadingEnabled
        ref={mapRef}
      >
        <MapViewDirections
          origin={LocationContext.origin}
          destination={LocationContext.destination}
          apikey={googleApi}
          strokeWidth={3}
          onReady={result => {
            LocationContext.setDistance(result.distance);
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
      </MapView>
      <View style={styles.content}>
        {isConfirmed ? (
          <FreightageConfirm freight={FreightContext.freight} />
        ) : (
          <>
            <FreightageForm />
            <MvButton
              onPress={() => setIsConfirmed(true)}
              propStyle={[styles.confirmButton]}
              isTouchable={FreightContext.isReadyToStart}
            >
              <View style={appCss.textIcon}>
                <Text style={[styles.confirmButtonText, { color: activeColor() }]}>AVANÇAR</Text>
                <MaterialCommunityIcons
                  name={"arrow-right-bold-outline"}
                  color={activeColor()}
                  size={22}
                />
              </View>
            </MvButton>
          </>
        )}
      </View>
      <TouchableOpacity onPress={Navigation.goBack} activeOpacity={0.8} style={styles.backButton}>
        <Icon name="keyboard-backspace" size={35} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    height: "50%",
    width: "100%",
  },
  content: {
    height: "50%",
    padding: 10,
    elevation: 1,
    backgroundColor: "white",
    justifyContent: "space-between",
  },
  backButton: {
    backgroundColor: "white",
    elevation: 10,
    top: -780,
    height: 40,
    width: 80,
    borderRadius: 50,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  confirmButton: {
    width: "100%",
    height: 40,
  },
  confirmButtonText: {
    fontSize: 17,
    color: "white",
  },
});

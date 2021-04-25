import { useNavigation } from "@react-navigation/core";
import React, { useRef } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MapView from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useFreightContext } from "../../context/FreightContext";
import { useLocalizationContext } from "../../context/LocalizationContext";
import { googleApi } from "../../domain/services/config";
import { grey } from "../../styles/color.css";
import { MvButton } from "../widgets/mv-button";
import { FreightageForm } from "./freightage-form";

export function FreightageStart() {
  const { goBack, navigate } = useNavigation();
  const { freight, allFieldsAreFilled, addFreight } = useFreightContext();
  const { origin, destination, addDistance } = useLocalizationContext();

  const mapRef = useRef<any>(null);

  function handlerConfirmFreight(): void {
    addFreight({ ...freight });
    console.log(freight);
  }

  return (
    <SafeAreaView style={styles.container}>
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
      <View style={styles.form}>
        <FreightageForm />
        <MvButton
          action={handlerConfirmFreight}
          propStyle={[styles.confirmButton]}
          isTouchable={allFieldsAreFilled}
        >
          <Text style={[styles.actionText, { color: allFieldsAreFilled ? "white" : grey.lighten }]}>
            CONFIRMAR
          </Text>
        </MvButton>
      </View>
      <TouchableOpacity onPress={goBack} activeOpacity={0.8} style={styles.backButton}>
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
    height: "60%",
    width: "100%",
  },
  form: {
    backgroundColor: "white",
    height: "40%",
    padding: 10,
    justifyContent: "space-between",
    elevation: 1,
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
    margin: 5,
  },
  actionText: {
    fontSize: 16,
    color: "white",
  },
});

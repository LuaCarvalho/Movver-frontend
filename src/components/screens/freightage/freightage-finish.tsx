import { useNavigation } from "@react-navigation/core";
import React, { useRef } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MapView from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useLocalizationContext } from "../../../context/LocalizationContext";
import { googleApi } from "../../../domain/services/config";
import MvButton from "../../widgets/mv-button";
import FreightageForm from "./freightage-form";


export default function Freightage() {
  const { goBack, navigate } = useNavigation();

  const { origin, destination, addDistance, addLocalization } = useLocalizationContext();
  const mapRef = useRef<any>(null);
  return (
    <>
      <MapView
        style={cStyle.map}
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
      <TouchableOpacity onPress={goBack} activeOpacity={0.8} style={cStyle.backButton}>
        <Icon name="keyboard-backspace" size={35} />
      </TouchableOpacity>
      <View style={cStyle.settingCard}>
        <FreightageForm />
        <TouchableOpacity>
          <MvButton style={{height: 40}} action={() => { }}>
            <Text style={cStyle.actionText}>Confirmar</Text>
          </MvButton>
        </TouchableOpacity>
      </View>
    </>
  );
}

const cStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  backButton: {
    backgroundColor: "white",
    elevation: 1,
    //Fica a 93% abaixo do top
    top: "-100%",
    height: 40,
    width: 80,
    borderRadius: 50,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  settingCard: {
    padding: 10,
    justifyContent: "space-between",
    backgroundColor: "white",
    elevation: 1,
    height: "33%",
    bottom: "40%",
  },
  actionText: {
    fontSize: 16,
    color: "white"
  }
});

import { useNavigation } from "@react-navigation/core";
import React, { useRef } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MapView from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useLocalizationContext } from "../../context/LocalizationContext";
import { googleApi } from "../../domain/services/config";
import { MvButton } from '../widgets/mv-button';
import { FreightageForm } from './freightage-form';

export function FreightageStart() {
  const { goBack, navigate } = useNavigation();

  const { origin, destination, addDistance, addLocalization } = useLocalizationContext();
  const mapRef = useRef<any>(null);
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
      <TouchableOpacity onPress={goBack} activeOpacity={0.8} style={styles.backButton}>
        <Icon name="keyboard-backspace" size={35} />
      </TouchableOpacity>
      <View style={styles.formCard}>
        <FreightageForm />
        <TouchableOpacity>
          <MvButton propStyle={{ width: "100%", height: 40 }} action={() => {}}>
            <Text style={styles.actionText}>CONFIRMAR</Text>
          </MvButton>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
  formCard: {
    padding: 10,
    justifyContent: "space-between",
    backgroundColor: "white",
    elevation: 1,
    height: "40%",
    top: "-55%",
  },
  actionText: {
    fontSize: 16,
    color: "white",
  },
});

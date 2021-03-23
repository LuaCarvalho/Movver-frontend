import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  GooglePlaceDetail,
  GooglePlacesAutocomplete,
  GooglePlacesAutocompleteRef,
} from "react-native-google-places-autocomplete";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { googleApi } from "../../services/config";

import { grey } from "../../styles/color.css";
import { useLocationContext } from "../../context/LocationContext";
import { directionEnum } from "../../model/types/enums";
import Location from "../../model/interfaces/Location";

const AutoComplete = ({ direction }: { direction: directionEnum }) => {
  const setLocation = useLocationContext().setLocation;

  const ref = useRef<GooglePlacesAutocompleteRef>(null);

  function onPress({}, details: GooglePlaceDetail | null) {
    const latitude = details!.geometry.location.lat;
    const longitude = details!.geometry.location.lng;
    setLocation({
      direction,
      region: { latitude, longitude, latitudeDelta: 1, longitudeDelta: 1 },
    });
  }

  function clear() {
    ref.current?.setAddressText("");
    setLocation({} as Location);
  }

  return (
    <View style={styles.search}>
      <GooglePlacesAutocomplete
        ref={ref}
        placeholder={direction}
        fetchDetails
        enablePoweredByContainer={false}
        enableHighAccuracyLocation={true}
        query={{
          key: googleApi,
          language: "pt-BR",
          components: "country:br",
        }}
        onPress={onPress}
        styles={{
          textInput: {
            backgroundColor: grey.lighten3,
          },
        }}
      />
      <TouchableOpacity style={styles.searchAction} onPress={clear}>
        <Icon name="close-circle" size={25} color="gray" />
      </TouchableOpacity>
    </View>
  );
};

export default AutoComplete;

const styles = StyleSheet.create({
  search: {
    flexDirection: "row",
    alignSelf: "center",
    width: "95%",
    borderRadius: 5,
    marginTop: 5,
  },
  searchAction: {
    height: 44,
    width: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  autocomplete: {
    flexDirection: "row",
  },
});

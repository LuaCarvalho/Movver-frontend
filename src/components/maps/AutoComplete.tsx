import React, { useRef, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import {
  GooglePlaceDetail,
  GooglePlacesAutocomplete,
  GooglePlacesAutocompleteRef,
} from "react-native-google-places-autocomplete";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { googleApi } from "../../services/config";

import { grey } from "../../styles/color.css";
import { directionEnum } from "../../context/LocationContext";

const AutoComplete = ({
  setLocation,
  direction,
}: {
  setLocation: Function;
  direction: directionEnum;
}) => {
  const ref = useRef<GooglePlacesAutocompleteRef>(null);

  function onPress({}, details: GooglePlaceDetail | null) {
    const location = details!.geometry.location;
    setLocation({
      latitude: location?.lat,
      longitude: location?.lng,
      latitudeDelta: 0.000922,
      longitudeDelta: 0.000421,
    });
  }

  function clear() {
    ref.current?.clear();
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
        <Icon name="close" size={25} color="black" />
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

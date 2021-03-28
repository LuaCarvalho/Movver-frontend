import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import {
  GooglePlaceDetail,
  GooglePlacesAutocomplete,
  GooglePlacesAutocompleteRef,
} from "react-native-google-places-autocomplete";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { googleApi } from "../../domain/services/config";
import { useLocalizationContext } from "../../context/LocalizationContext";
import { directionEnum } from "../../domain/model/types/enums";

import { grey } from "../../styles/color.css";

import Localization from "../../domain/model/interfaces/Localization";
import { getCurrentLocation, Locatization_CF } from "../../domain/services/localization/location";

const AutoComplete = ({ direction, focus }: { direction: directionEnum; focus?: boolean }) => {
  const { addLocalization } = useLocalizationContext();

  const ref = useRef<GooglePlacesAutocompleteRef>(null);

  function onPress({}, details: GooglePlaceDetail | null) {
    const latitude = details!.geometry.location.lat;
    const longitude = details!.geometry.location.lng;
    const location = Locatization_CF(direction, latitude, longitude);
    addLocalization(location);
  }

  function clear() {
    ref.current?.setAddressText("");
    addLocalization({} as Localization);
  }

  /** Se esse componente receber a localização de origem,
   ** inicialmente ele irá apontar para a localização atual */
  useEffect(() => {
    if (direction === directionEnum.ORIGIN) {
      (async function () {
        //O texto informativo deve ser definido primeiro, afinal, ele é sincrono
        ref.current?.setAddressText("Localização atual");
        const location = await getCurrentLocation(direction);
        addLocalization(location);
      })();
    }
  }, []);

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

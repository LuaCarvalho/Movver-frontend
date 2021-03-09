import React, { useEffect, useState } from "react";

import config from "../../services/config/index.json";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Button, Text, View } from "react-native";

import mapCss from "../../styles/map.css";
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native-gesture-handler";

const AutoComplete = ({
  setLocation,
  name,
}: {
  setLocation: Function;
  name: string;
}) => {

  return (
    <View style={mapCss.searchMap}>
      <ScrollView
        keyboardShouldPersistTaps="always"
        overScrollMode="never"
        bounces
        showsHorizontalScrollIndicator
        centerContent
        contentContainerStyle={{
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <GooglePlacesAutocomplete
          placeholder={name}
          fetchDetails
          enablePoweredByContainer={false}
          enableHighAccuracyLocation={true}
          keyboardShouldPersistTaps="always"
          query={{
            key: config.googleApi,
            language: "pt-BR",
            components: "country:br",
          }}
          onPress={(data, details) => {
            setLocation({
              latitude: details?.geometry.location.lat,
              longitude: details?.geometry.location.lng,
              latitudeDelta: 0.000922,
              longitudeDelta: 0.000421,
            });
          }}
          listViewDisplayed={false}
        />
        <TouchableOpacity
          style={mapCss.searchMapAction}
          onPress={() => setLocation(null)}
        >
          <Text style={{color: "white"}}>{'<'}</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default AutoComplete;

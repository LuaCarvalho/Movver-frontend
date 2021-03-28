import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  GooglePlaceDetail,
  GooglePlacesAutocomplete,
  GooglePlacesAutocompleteRef,
} from "react-native-google-places-autocomplete";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { TextInput } from "react-native-gesture-handler";
import { grey } from "../../styles/color.css";


import { tomKey } from "../../domain/services/config";

import axios from "axios";


const AutoComplete = ({ }: {}) => {
  const [result, setResult] = useState<any>();
  const [query, setQuery] = useState<string>();


  async function get() {
    /**
     * https://api.tomtom.com/search/2/search/
     * {consulta}
     * .json?
     * limit=5&
     * lat=37.337&
     * lon=-121.89&
     * language=pt-br&
     * entityTypeSet=&
     * key=*****
     */
    const url =
      `https://api.tomtom.com/search/2/search/
      ${query}.json?
      lat=37.337&
      lon=-121.89&
      entityTypeSet=&
      key=${tomKey}&
      limit=1`
    const result = await axios.get(url);
    console.log(result.data);
  }

  useEffect(() => {
    get()
  }, [query])
  return (
    <>
      <View style={cStyle.search}>
        <TextInput onChangeText={(text) => setQuery(text)} style={cStyle.input} />
        <TouchableOpacity style={cStyle.searchAction}>
          <Icon name="close-circle" size={25} color="gray" />
        </TouchableOpacity>
      </View>
      {/* <View>
        {result?.map(r => (
          <Text>{r}</Text>
        ))
        }
      </View> */}
    </>
  );
};

export default AutoComplete;

const cStyle = StyleSheet.create({
  search: {
    margin: 10,
    flexDirection: "row",
    alignSelf: "center",
    width: "95%",
    borderRadius: 5,
  },
  input: {
    flex: 1,
    backgroundColor: grey.lighten4,
  },
  searchAction: {
    height: 44,
    width: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});

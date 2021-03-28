import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, TextInput, View } from "react-native";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { grey } from "../../styles/color.css";
import { tomKey } from "../../domain/services/config";

import TomQuery from "../../domain/model/interfaces/TomTomSearch";

import axios from "axios";

import { useTomCompleteContext } from "../../context/TomCompleteContext";
import { useLocalizationContext } from "../../context/LocalizationContext";

import { directionEnum } from "../../domain/model/types/enums";
import { getCurrentLocation } from "../../domain/services/localization/location";

/* TomComplete:
 * providencia uma forma de simples de buscar endereções atráves de entradas de texto */
const TomComplete = ({ direction, focus }: { direction: directionEnum; focus?: boolean }) => {
  const { addLocalization  } = useLocalizationContext();
  const { setTomSearch, setDirection } = useTomCompleteContext();

  const [query, setQuery] = useState<string>("");


  async function getAddres(search: string): Promise<TomQuery> {
    const query1 = encodeURIComponent(search);
    const limit = 5;
    const baseUrl = "https://api.tomtom.com/search/2/search/";
    const url = `${baseUrl}${query1}.json?&countrySet=br&language=pt-br&limit=${limit}&key=${tomKey}`;
    const res = await axios.get(url);
    const data: TomQuery = res.data;
    return data;
  }

  useEffect(() => {
    (async () => {
      if (query.length === 0 || query.length % 3 !== 0) return;
      const res = await getAddres(query);
      setTomSearch(res);
      setDirection(direction)
    })();
  }, [query]);

  /* Se esse componente receber a localização de origem,
   * inicialmente ele irá apontar para a localização atual */
  useEffect(() => {
    if (direction === directionEnum.ORIGIN) {
      (async function () {
        //O texto informativo deve ser definido primeiro, afinal, ele é sincrono
        setQuery("Localização atual");
        const location = await getCurrentLocation(direction);
        addLocalization(location);
      })();
    }
  }, []);

  return (
    <View style={cStyle.search}>
      <TextInput value={query} onChangeText={text => setQuery(text)} style={cStyle.input} />
      <TouchableOpacity onPress={() => setQuery("")} style={cStyle.searchAction}>
        <Icon name="close-circle" size={25} color="gray" />
      </TouchableOpacity>
    </View>
  );
};

export default TomComplete;

const cStyle = StyleSheet.create({
  search: {
    flexDirection: "row",
    alignSelf: "center",
    borderRadius: 5,
    margin: 5,
  },
  input: {
    flex: 1,
    padding: 10,
    backgroundColor: grey.lighten4,
  },
  searchAction: {
    height: 44,
    width: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});

import React, { useEffect, useState } from "react";
import { StyleSheet, TextInput, TouchableHighlight, View } from "react-native";

import axios from "axios";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import TomQuery from "../../domain/model/interfaces/TomTomSearch";

import { grey } from "../../styles/color.css";
import { tomKey } from "../../domain/services/config";

import { useTomCompleteContext } from "../../context/TomCompleteContext";
import { useLocalizationContext } from "../../context/LocalizationContext";

import { directionEnum } from "../../domain/model/types/enums";
import { getCurrentLocation } from "../../domain/services/localization/location";

/* TomComplete:
 * providencia uma forma de simples de buscar endereções atráves de entradas de texto */
const TomComplete = ({ direction }: { direction: directionEnum }) => {
  const { addLocalization, origin } = useLocalizationContext();
  const {
    contextQuery,
    contextDirection,
    setTomSearch,
    setContextDirection,
  } = useTomCompleteContext();

  const [query, setQuery] = useState<string>("");

  const isSelect = direction === contextDirection;

  async function getAddres(search: string): Promise<TomQuery> {
    const baseUrl = "https://api.tomtom.com/search/2/search/";
    const query = encodeURIComponent(search);
    const aproxLat = origin.region.latitude;
    const aproxLon = origin.region.longitude;
    const limit = "limit=" + 5;
    const url = `${baseUrl}${query}.json?&countrySet=br&lat=${aproxLat}&lon=${aproxLon}&language=pt-br&${limit}&key=${tomKey}`;
    const res = await axios.get(url);
    const data: TomQuery = res.data;
    return data;
  }

  /* Se esse componente receber a localização de origem, irá apontar para a localização atual */
  useEffect(() => {
    (async function () {
      if (direction !== directionEnum.ORIGIN) return;
      //O texto informativo deve ser definido primeiro, afinal, ele é sincrono
      setQuery("Localização atual");
      const location = await getCurrentLocation(direction);
      addLocalization(location);
    })();
  }, []);

  //Sempre que uma nova entrada for digitada, ira buscar novos endereções
  useEffect(() => {
    (async () => {
      //Evita que ao digitar aja uma excesso de consultas
      if (query.length === 0 || query.length % 3 !== 0) return;
      const res = await getAddres(query);
      setTomSearch(res);
      setContextDirection(direction);
    })();
  }, [query]);

  //Atualiza o campo do input de acordo com os dados escolhidos pelo usuário no "TomContainer"
  useEffect(() => {
    //Verifica se os dados deve ser inseridos nesse componente ou não
    if (contextDirection === direction) setQuery(contextQuery);
  }, [contextQuery]);

  return (
    <View style={cStyle.search}>
      <TextInput
        value={query}
        onTouchStart={() => setContextDirection(direction)}
        onChangeText={text => setQuery(text)}
        style={cStyle.input}
      />
      <TouchableHighlight
        onPress={() => setQuery("")}
        style={cStyle.clearButton}
        underlayColor={grey.lighten2}
      >
        <Icon name="close-circle" size={25} color="gray" />
      </TouchableHighlight>
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
  clearButton: {
    height: 44,
    width: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});

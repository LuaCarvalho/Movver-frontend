import axios from "axios";
import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableHighlight, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useLocalizationContext } from "../../../context/LocalizationContext";
import { useTomCompleteContext } from "../../../context/TomCompleteContext";
import TomQuery from "../../../domain/model/interfaces/TomTomSearch";
import { directionEnum } from "../../../domain/model/types/enums";
import { tomKey } from "../../../domain/services/config";
import { getCurrentLocation } from "../../../domain/services/localization/location";
import { grey } from "../../../styles/color.css";
import MvInput from "../mv-input";

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
    const query = encodeURIComponent(search);
    const BASE_URL = "https://api.tomtom.com/search/2/search/";
    const APROX_LAT = origin.region.latitude;
    const APROX_LON = origin.region.longitude;
    const LIMIT = 5;
    const URL = `${BASE_URL}${query}.json?&countrySet=br&lat=${APROX_LAT}&lon=${APROX_LON}&language=pt-br&limit=${LIMIT}&key=${tomKey}`;
    const res = await axios.get(URL);
    const data: TomQuery = res.data;
    return data;
  }

  //Primeira função a ser executada ao clicar no componente
  useEffect(() => {
    (async function () {
      setContextDirection(direction);
      /* Se esse componente receber a localização de origem, irá apontar para a localização atual */
      if (direction !== directionEnum.ORIGIN) return;
      //O texto informativo deve ser definido primeiro, afinal, ele é sincrono
      setQuery("Localização atual");
      const location = await getCurrentLocation(direction);
      addLocalization(location);
    })();
  }, []);

  //Faz a busca por endereços
  async function searchAddres(text: string) {
    setQuery(text);
    //Evita que ao digitar aja uma excesso de consultas
    if (query.length === 0 || query.length % 3 !== 0) return;
    const res = await getAddres(query);
    setTomSearch(res);
    setContextDirection(direction);
  }

  //Atualiza o campo do input de acordo com os dados escolhidos pelo usuário no "TomContainer"
  useEffect(() => {
    //Verifica se os dados deve ser inseridos nesse componente ou não
    if (contextDirection === direction) setQuery(contextQuery);
  }, [contextQuery]);

  return (
    <View style={cStyle.search}>
      <MvInput
        icon="map-marker"
        placeholder={direction}
        value={query}
        style={{height: 55, marginBottom: 0, marginTop: 0}}
        //Sempre que uma nova entrada for digitada, ira buscar novos endereções
        setCallback={searchAddres}
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
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    margin: 5,
  },
  clearButton: {
    height: 44,
    width: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});

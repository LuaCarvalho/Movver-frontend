import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableHighlight, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useLocalizationContext } from "../../context/localization-context";
import { useTomCompleteContext } from "../../context/tom-complete-context";
import { directionEnum } from "../../domain/model/enums";
import { AddressHandler } from "../../domain/services/function/address-handler";
import { LocalizationHandler } from "../../domain/services/function/localization-handler";
import { grey } from "../../styles/color.css";
import { MvInput } from "../widgets/mv-input";

/* TomComplete:
 * providencia uma forma de simples de buscar endereções atráves de entradas de texto */
export const TomComplete = ({ direction }: { direction: directionEnum }) => {
  const { addLocalization, origin } = useLocalizationContext();
  const { contextQuery, contextDirection, setTomSearch, setContextDirection } =
    useTomCompleteContext();

  const [query, setQuery] = useState<string>("");

  function removeLocalization() {
    setQuery("");
  }

  
  //Faz a busca por endereços
  async function searchAddres(text: string) {
    setQuery(text);
    //Evita que ao digitar aja uma excesso de consultas
    if (query.length === 0 || query.length % 3 !== 0) return;
    const res = await AddressHandler.getAddress(query, origin);
    setTomSearch(res);
    setContextDirection(direction);
  }
  
  //Primeira função a ser executada ao clicar no componente
  useEffect(() => {
    (async function () {
      setContextDirection(direction);
      /* Se esse componente receber a localização de origem, irá apontar para a localização atual */
      if (direction !== directionEnum.ORIGIN) return;
      //O texto informativo deve ser definido primeiro, afinal, ele é sincrono
      const { latitude, longitude } = await LocalizationHandler.getCurrentLocation();
      const localization = LocalizationHandler.Create(directionEnum.ORIGIN, latitude, longitude);
      addLocalization(localization);
      setQuery("Localização atual");
    })();
  }, []);
  //Atualiza o campo do input de acordo com os dados escolhidos pelo usuário no "TomContainer"
  useEffect(() => {
    //Verifica se os dados deve ser inseridos nesse componente ou não
    if (contextDirection === direction) setQuery(contextQuery);
  }, [contextQuery]);

  return (
    <View style={styles.search}>
      <MvInput
        icon="map-marker"
        placeholder={direction}
        value={query}
        style={{ height: 55, marginBottom: 0, marginTop: 0 }}
        //Sempre que uma nova entrada for digitada, ira buscar novos endereções
        onChangeText={searchAddres}
      />
      <TouchableHighlight
        onPress={removeLocalization}
        style={styles.clearButton}
        underlayColor={grey.lighten2}
      >
        <Icon name="close-circle" size={25} color="gray" />
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
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

import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/core";

import AutoComplete from "../maps/AutoComplete";
import Select from "../widgets/select/Select";

import { directionEnum } from "../../context/LocationContext";

import appCss from "../../styles/app.css";

const FindDriver = ({
  setOrigin,
  setDestination,
  distance,
}: {
  setOrigin: Function;
  setDestination: Function;
  distance: number;
}) => {
  const { goBack } = useNavigation();

  return (
    <View style={styles.modalViewColumn}>
      <View style={styles.modalViewRow}>
        <View style={[styles.card, styles.searchBoxesCard]}>
          <TouchableOpacity onPress={goBack}>
            <Icon name="keyboard-backspace" size={35} />
          </TouchableOpacity>
          <AutoComplete direction={directionEnum.ORIGEN} setLocation={setOrigin} />
          <AutoComplete direction={directionEnum.DESTINATION} setLocation={setDestination} />
        </View>
        <View style={[styles.card, styles.formCard]}>
          <View style={appCss.textIcon}>
            <Text>Distância: {distance | 0}km</Text>
          </View>
          <View style={appCss.textIcon}>
            <Select
              title="Tipo de Carga"
              setValue={() => {}}
              items={["mudança", "transporte de materiais"]}
            />
          </View>
          <View style={appCss.textIcon}>
            <Text>Enviar uma descrição (opcional):</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FindDriver;

const styles = StyleSheet.create({
  modalViewColumn: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  modalViewRow: {
    width: "95%",
    flexDirection: "column",
    justifyContent: "center",
  },
  card: {
    padding: 10,
    elevation: 10,
    backgroundColor: "white",
    marginBottom: 5,
  },
  searchBoxesCard: {
    flexGrow: 1,
  },
  formCard: {
    flexGrow: 10,
  },
});

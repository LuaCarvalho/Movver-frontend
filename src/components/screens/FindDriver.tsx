import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/core";

import Select from "../widgets/select/Select";

import { directionEnum, servicesEnum } from "../../model/types/enums";

import appCss from "../../styles/app.css";
import { grey, green, blue } from "../../styles/color.css";

import MvButton from "../widgets/MvButton";
import AutoComplete from "../../components/maps/AutoComplete";
import { useLocationContext } from "../../context/LocationContext";
import SelectCard from "../widgets/selectCard/SelectCard";

const FindDriver = () => {
  const { goBack } = useNavigation();
  const { origin, destination, distance } = useLocationContext();

  const [description, setDescription] = useState(false);
  const [service, setService] = useState<string>();

  return (
    <View style={styles.modalViewColumn}>
      <View style={styles.modalViewRow}>
        <View style={[styles.card, styles.searchBoxesCard]}>
          <TouchableOpacity onPress={goBack}>
            <Icon name="window-close" size={35} />
          </TouchableOpacity>
          <AutoComplete direction={directionEnum.ORIGIN} />
          <AutoComplete direction={directionEnum.DESTINATION} />
        </View>
        {/* {destination.region && origin.region && ( */}
        <View style={[styles.card, styles.formCard]}>
          <View style={appCss.textIcon}>
            <Text style={appCss.infoText}>Distância: {distance | 0}km</Text>
          </View>
          <View style={appCss.textIcon}>
            <Text style={appCss.infoText}>Tipo da carga: </Text>
            <SelectCard
              setValue={setService}
              options={[
                { value: "Mudança", icon: "truck" },
                { value: "Outros", icon: "dump-truck" },
                { value: "Transporte de Materiais", icon: "dump-truck" },
              ]}
            />
          </View>
          <View style={appCss.textIcon}>
            <Text style={appCss.infoText}>Peso estimado (opcional): </Text>
            <Select setValue={() => {}} items={[500, 1000, 2000, 4000, 6000, 8000, 10000]} />
          </View>
          <View style={appCss.textIcon}>
            <Text onPress={() => setDescription(!description)} style={appCss.infoText}>
              Enviar uma descrição (opcional):
            </Text>
          </View>
          {description && (
            <View>
              <TextInput
                numberOfLines={4}
                multiline
                style={styles.descriptionInput}
                placeholder="Escrever algo aqui..."
              />
            </View>
          )}
        </View>
        <View style={[styles.card, styles.actionsCard]}>
          <MvButton
            action={goBack}
            style={{
              width: "50%",
              alignSelf: "center",
              borderRadius: 100,
              height: 45,
            }}
          >
            <View style={[appCss.textIcon, {
           
            }]}>
              <Icon name="account-search" size={25} />
              <Text>Buscar</Text>
            </View>
          </MvButton>
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
    marginTop: 5,
  },
  searchBoxesCard: {
    flexGrow: 1,
  },
  formCard: {
    flexGrow: 8,
  },
  descriptionInput: {
    padding: 10,
    backgroundColor: grey.lighten4,
  },
  actionsCard: {
    justifyContent: "center",
    marginBottom: 5,
  },
});

import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/core";

import appCss from "../../styles/app.css";
import { grey, green, blue } from "../../styles/color.css";

import { directionEnum } from "../../domain/model/types/enums";

import { useLocationContext } from "../../context/LocationContext";

import MvButton from "../widgets/MvButton";
import AutoComplete from "../../components/maps/AutoComplete";
import AutoComplete2 from "../../components/maps/AutoComplete2";

import Select from "../widgets/select/Select";
import SelectCard, { Option } from "../widgets/selectCard/SelectCard";

const services: Array<Option> = [
  { value: "Mudança", icon: "truck" },
  { value: "Outros", icon: "dump-truck" },
  { value: "Transporte de Materiais", icon: "dump-truck" },
];

const FindDriver = () => {
  const { goBack, navigate } = useNavigation();
  const { origin, destination, distance } = useLocationContext();

  const [description, setDescription] = useState<boolean>();
  const [service, setService] = useState<string>();

  const LocationHistory: React.FC = () => <></>;

  const Form: React.FC = () => (
    <View style={[cStyle.card, cStyle.formCard]}>
      <View style={appCss.textIcon}>
        <Text style={appCss.infoText}>Tipo da carga: </Text>
        <SelectCard setValue={setService} options={services} />
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
            style={cStyle.descriptionInput}
            placeholder="Escrever algo aqui..."
          />
        </View>
      )}
    </View>
  );

  const CentralComponent: React.FC = () =>
    !origin.region || !destination.region ? <LocationHistory /> : <Form />;

  return (
    <View style={cStyle.container}>
      <View style={cStyle.mainView}>
        <View style={[cStyle.card, cStyle.searchBoxesCard]}>
          <TouchableOpacity onPress={() => navigate("PublicNavigator")} style={{ width: 35 }}>
            <Icon name="window-close" size={30} />
          </TouchableOpacity>
          <View>
            {/* <AutoComplete direction={directionEnum.ORIGIN} /> */}
            {/* <AutoComplete direction={directionEnum.DESTINATION} focus /> */}
            <AutoComplete2 />
          </View>
          {Boolean(distance) && (
            <View style={appCss.textIcon}>
              <Text style={cStyle.distance}>Distância: {distance | 0}km</Text>
            </View>
          )}
        </View>
        {/* {destination.region && origin.region && ( */}
        <CentralComponent />
        <View style={[cStyle.card, cStyle.actionCard]}>
          <MvButton action={goBack} style={cStyle.actionButton}>
            <View style={[appCss.textIcon, {}]}>
              <Icon name="account-search-outline" color="black" size={25} />
              <Text>Buscar</Text>
            </View>
          </MvButton>
        </View>
      </View>
    </View>
  );
};

export default FindDriver;

const cStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  mainView: {
    width: "95%",
    flexDirection: "column",
    justifyContent: "center",
  },
  card: {
    padding: 10,
    elevation: 5,
    backgroundColor: "white",
    marginTop: 5,
  },
  searchBoxesCard: {
    flexGrow: 1,
  },
  distance: {
    flex: 1,
    fontSize: 13,
    opacity: 0.5,
    textAlign: "right",
  },
  formCard: {
    flexGrow: 8,
  },
  descriptionInput: {
    padding: 10,
    backgroundColor: grey.lighten4,
  },
  actionCard: {
    justifyContent: "center",
    marginBottom: 5,
  },
  actionButton: {
    borderRadius: 100,
    height: 45,
  },
});

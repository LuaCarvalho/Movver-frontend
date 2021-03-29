import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/core";

import appCss from "../../styles/app.css";
import { grey, green, blue } from "../../styles/color.css";

import { directionEnum } from "../../domain/model/types/enums";

import { useLocalizationContext } from "../../context/LocalizationContext";

import MvButton from "../widgets/MvButton";
import TomComplete from "../maps/TomComplete";

import Select from "../widgets/select/Select";
import SelectCard, { Option } from "../widgets/selectCard/SelectCard";

import TomContainer from "../maps/TomContainer";
import { useTomCompleteContext } from "../../context/TomCompleteContext";

const services: Array<Option> = [
  { value: "Mudança", icon: "truck" },
  { value: "Outros", icon: "dump-truck" },
  { value: "Transporte de Materiais", icon: "dump-truck" },
];

const FindDriver = () => {
  const { goBack, navigate } = useNavigation();

  const { origin, destination } = useLocalizationContext();

  const [description, setDescription] = useState<boolean>();
  const [service, setService] = useState<string>();

  const CentralComponent: React.FC = () => (
    <View style={cStyle.centralContent}>{true ? <TomContainer /> : <Form />}</View>
  );

  const Form: React.FC = () => (
    <View style={{ padding: 5 }}>
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

  return (
    <View style={cStyle.container}>
      <View style={cStyle.mainView}>
        <View style={[cStyle.card, cStyle.searchBoxesCard]}>
          <TouchableOpacity onPress={() => navigate("PublicNavigator")} style={{ width: 35 }}>
            <Icon name="window-close" size={30} />
          </TouchableOpacity>
          <View>
            <TomComplete direction={directionEnum.ORIGIN} />
            <TomComplete direction={directionEnum.DESTINATION} />
          </View>
        </View>
        <CentralComponent />
        {origin.region && destination.region && (
          <View style={[cStyle.card, cStyle.actionCard]}>
            <MvButton action={goBack} style={cStyle.actionButton}>
              <View style={[appCss.textIcon, {}]}>
                <Icon name="account-search-outline" color="black" size={25} />
                <Text>Buscar</Text>
              </View>
            </MvButton>
          </View>
        )}
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
  centralContent: {
    flexGrow: 8,
    elevation: 5,
    marginTop: 5,
    backgroundColor: "white",
  },
  searchBoxesCard: {},
  distance: {
    flex: 1,
    fontSize: 13,
    opacity: 0.5,
    textAlign: "right",
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

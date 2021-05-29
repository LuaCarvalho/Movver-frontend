import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { useFreightContext } from "../../context/freight-context";
import { useLocationContext } from "../../context/location-context";
import { iFreight } from "../../domain/model/interfaces/iFreight";
import { FreightHttp } from "../../domain/services/api/freight-http";
import { appCss } from "../../styles/app.css";
import colorCss, { grey } from "../../styles/color.css";
import { MvButton } from "../widgets/mv-button";

interface Props {
  freight: iFreight;
}

export const FreightageConfirm: React.FC<Props> = ({ freight }) => {
  const LocationContext = useLocationContext();
  const FreightContext = useFreightContext()

  async function handlerConfirm() {
    await FreightHttp.save(FreightContext.freight);
  }

  return (
    <View style={styles.container}>
      <Text style={appCss.title}>Confirmar dados</Text>
      <View style={styles.freightData}>
        <View style={appCss.textIcon}>
          <MaterialCommunityIcons
            name={freight.service == "Mudança" ? "truck" : "dump-truck"}
            color={colorCss.grey.c}
            size={22}
          />
          <Text style={[appCss.infoText3, styles.data]}>{freight.service}</Text>
        </View>
        <View style={appCss.textIcon}>
          <MaterialCommunityIcons name="cash" color={colorCss.grey.c} size={22} />
          <Text style={[appCss.infoText3, styles.data]}>{freight.price}</Text>
        </View>
        <View style={appCss.textIcon}>
          <MaterialCommunityIcons name="weight" color={colorCss.grey.c} size={22} />
          <Text style={[appCss.infoText3, styles.data]}>+/- {freight.weight} KG</Text>
        </View>
        <View style={appCss.textIcon}>
          <MaterialCommunityIcons name="map-marker" color={colorCss.grey.darken} size={22} />
          <Text style={[appCss.infoText3, styles.data]}>
            Indo de
            <Text style={{ fontWeight: "bold" }}> {LocationContext.origin.name} </Text>
          </Text>
        </View>
        <View style={appCss.textIcon}>
          <MaterialCommunityIcons name="map-marker" color={colorCss.blue.c} size={22} />
          <Text style={[appCss.infoText3, styles.data]}>
            Para
            <Text style={{ fontWeight: "bold" }}> {LocationContext.destination.name} </Text>
          </Text>
        </View>
      </View>
      <MvButton onPress={handlerConfirm}>
        <Text>CONFIRMAR</Text>
      </MvButton>
    </View>
  );
};

const height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  freightData: {
    flex: 1,
    width: "100%",
    margin: 25,
  },
  data: {
    flex: 1,
    padding: 10,
    borderBottomWidth: 0.7,
    borderColor: grey.lighten,
  },
});

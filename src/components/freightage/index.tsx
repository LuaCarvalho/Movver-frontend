import { useNavigation } from "@react-navigation/core";
import React, { useEffect } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useLocationContext } from "../../context/location-context";
import { secondaryRoutes } from "../../routes/routes-enum";
import { appCss } from "../../styles/app.css";
import { LocationFinder } from "../location-finder";

export const Freightage = () => {
  const Navigation = useNavigation();
  const LocationContext = useLocationContext();

  //Quando a localização de origem e destino são selecionadas, a busca por motorista se inicia
  useEffect(() => {
    if (LocationContext.isReady) Navigation.navigate(secondaryRoutes.FREIGHTAGE_START);
  }, [LocationContext.destination, LocationContext.origin]);

  return (
    <SafeAreaView style={appCss.container}>
      <View style={cStyle.mainView}>
        <TouchableOpacity onPress={Navigation.goBack} style={cStyle.close}>
          <Icon name="window-close" size={30} />
        </TouchableOpacity>
        <LocationFinder />
      </View>
    </SafeAreaView>
  );
};

const cStyle = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "white",
  },
  close: {
    top: 1,
    marginLeft: 10,
    width: 35,
  },
  card: {},
  form: {},
});

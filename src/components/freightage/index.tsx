import { useNavigation } from "@react-navigation/core";
import React, { useEffect } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useLocalizationContext } from "../../context/LocalizationContext";
import { secondaryRoutes } from "../../routes/routes-enum";
import { appCss } from "../../styles/app.css";
import { LocationFinder } from "../widgets/maps/location-finder";

export const Freightage = () => {
  const { goBack, navigate } = useNavigation();

  const { origin, destination } = useLocalizationContext();

  const isLocalization = Boolean(origin.region) && Boolean(destination.region);

  //Quando a localização de origem e destino são selecionadas, o frete inicia
  useEffect(() => {
    if (isLocalization) navigate(secondaryRoutes.FREIGHTAGE_START);
  }, [origin, destination]);

  return (
    <SafeAreaView style={appCss.container}>
      <View style={cStyle.mainView}>
        <TouchableOpacity onPress={goBack} style={cStyle.close}>
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

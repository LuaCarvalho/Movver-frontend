import { useNavigation } from "@react-navigation/core";
import React, { useEffect } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useLocalizationContext } from "../../../../context/LocalizationContext";
import LocationFinder from "./LocationFinder";

const FindDriver = () => {
  const { goBack, navigate } = useNavigation();

  const { origin, destination } = useLocalizationContext();

  const isLocalization = origin.region && destination.region;

  useEffect(() => {
    if (isLocalization) navigate("Finish");
  }, [isLocalization]);

  return (
    <View style={cStyle.container}>
      <View style={cStyle.mainView}>
        <TouchableOpacity onPress={goBack} style={cStyle.close}>
          <Icon name="window-close" size={30} />
        </TouchableOpacity>
        <LocationFinder />
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

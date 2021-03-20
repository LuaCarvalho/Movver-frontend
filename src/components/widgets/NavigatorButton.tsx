import React from "react";
import { View, StyleSheet, Dimensions, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

const NavigatorButton: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <View onTouchStart={() => navigate("FindDriver")} style={styles.findButton}>
      <TextInput placeholder="Buscar?" />
    </View>
  );
}

export default NavigatorButton;

const height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  findButton: {
    top: -(height / 1.25),
    height: 50,
    borderRadius: 50,
    elevation: 10,
    margin: 10,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});

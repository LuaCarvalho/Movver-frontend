import React from "react";
import { Text, TouchableOpacity, StyleSheet, ViewStyle } from "react-native";

import { blue } from "../../styles/color.css";

const MButton = ({ action }: { action: Function }) => {
  return (
    <TouchableOpacity onPress={() => action()} style={[styles.mButton]}>
      <Text>Buscar</Text>
    </TouchableOpacity>
  );
};
export default MButton;

const styles = StyleSheet.create({
  mButton: {
    backgroundColor: blue.c,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
});

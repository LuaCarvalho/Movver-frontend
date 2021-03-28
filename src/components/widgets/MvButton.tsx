import React from "react";
import { Text, TouchableOpacity, StyleSheet, ViewStyle, TextStyle } from "react-native";

import { blue } from "../../styles/color.css";

const MButton = ({
  action,
  children,
  style,
}: {
  action: Function;
  children: React.ReactNode;
  style?: ViewStyle;
}) => {
  return (
    <TouchableOpacity onPress={() => action()} style={[compStyle.mButton, style]}>
      {children}
    </TouchableOpacity>
  );
};
export default MButton;

const compStyle = StyleSheet.create({
  mButton: {
    width: "80%",
    backgroundColor: blue.c,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    padding: 5,
  },
});

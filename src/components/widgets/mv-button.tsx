import React from "react";
import { StyleSheet, TouchableOpacity, ViewStyle } from "react-native";
import { blue } from "../../styles/color.css";


export const MvButton = ({
  action,
  children,
  propStyle,
}: {
  action: Function;
  children: React.ReactNode;
  propStyle?: ViewStyle;
}) => {
  return (
    <TouchableOpacity onPress={() => action()} style={[styles.mvButton, propStyle]}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mvButton: {
    width: 100,
    backgroundColor: blue.c,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    padding: 5,
  },
});

import React from "react";
import { StyleSheet, TouchableOpacity, ViewStyle } from "react-native";
import { blue, grey } from "../../styles/color.css";

export const MvButton = ({
  action,
  children,
  isTouchable = true,
  propStyle,
}: {
  action: Function;
  isTouchable?: boolean;
  children: React.ReactNode;
  propStyle?: ViewStyle | ViewStyle[];
  }) => {
  
  return (
    <>
      {isTouchable ? (
        <TouchableOpacity onPress={() => action()} style={[styles.mvButton, propStyle]}>
          {children}
        </TouchableOpacity>
      ) : (
        <TouchableOpacity activeOpacity={1} style={[styles.mvButtonDisabled, propStyle]}>
          {children}
        </TouchableOpacity>
      )}
    </>
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
  mvButtonDisabled: {
    backgroundColor: grey.lighten3,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    padding: 5,
  },
});

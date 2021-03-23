import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ViewStyle, TextStyle } from "react-native";

import MvModal, { StyleMvModel, ModalContext } from "../MvModal";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { grey, blue } from "../../../styles/color.css";

export interface StyleSelectCard {
  styleMvModel?: StyleMvModel;
  container?: ViewStyle;
  icons?: TextStyle;
  text?: TextStyle;
}

interface Option {
  value: any;
  label?: string;
  color?: string;
  icon?: string;
}

function randomColor(index: number) {
  if (index % 2 === 0) return blue.lighten2;
  return blue.lighten;
}

const SelectCard = ({ options, style }: { options: Option[]; style?: StyleSelectCard }) => {
  const { visible, setVisible } = useContext(ModalContext);

  function onPress() {
    setVisible(false);
  }

  return (
    <MvModal showCloseButton={false} style={style?.styleMvModel}>
      <View style={[compentStyle.container, style?.container]}>
        {options.map((option, index) => (
          <TouchableOpacity
            onPress={onPress}
            key={option.value}
            style={[
              { backgroundColor: option.color ? option.color : randomColor(index) },
              compentStyle.option,
            ]}
          >
            {option.icon && <Icon name={option.icon} size={40} style={style?.icons} />}
            <Text style={[compentStyle.text, style?.text]}>Mudança</Text>
          </TouchableOpacity>
        ))}
      </View>
    </MvModal>
  );
};
export default SelectCard;

const compentStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    padding: 2,
  },
  option: {
    flex: 1,
    minWidth: "40%",
    maxHeight: 260,
    justifyContent: "center",
    margin: 2,
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    alignSelf: "center",
  },
});

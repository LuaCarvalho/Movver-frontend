import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ViewStyle, TextStyle } from "react-native";

import MvModal from "../mv-modal";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { blue } from "../../../styles/color.css";

export interface Option {
  value: any;
  label?: string;
  color?: string;
  icon?: string;
}

function randomColor(index: number) {
  if (index % 2 === 0) return blue.lighten2;
  return blue.lighten;
}

const SelectCard = ({ options, setValue }: { options: Option[]; setValue: Function }) => {
  const [newValue, setNewValue] = useState<string>();

  const title = newValue ? String(newValue) : "Selecione";

  function onChangeValue(value: any) {
    setValue(value);
    setNewValue(value);
  }

  return (
    <MvModal title={title}>
      <View style={compStyle.container}>
        {options.map((option, index) => (
          <TouchableOpacity
            onPress={() => onChangeValue(option.value)}
            key={option.value}
            style={[
              { backgroundColor: option.color ? option.color : randomColor(index) },
              compStyle.option,
            ]}
          >
            <View style={compStyle.titleAndIcon}>
              <Icon name={option.icon || ""} size={40} />
              <Text style={compStyle.title}>{option.label || option.value}</Text>
            </View>
            <View style={compStyle.information}>
              <Text style={compStyle.text}>Balbablabalblab</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </MvModal>
  );
};
export default SelectCard;

const compStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap-reverse",
    alignContent: "center",
  },
  option: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    padding: 5,
    flexDirection: "row",
  },
  titleAndIcon: {
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,

    borderRightWidth: 1,
  },
  title: {
    fontSize: 17,
    opacity: 0.6,
  },
  information: {
    width: "70%",
    padding: 10,
  },
  text: {
    fontSize: 15,
    opacity: 0.8,
  },
});

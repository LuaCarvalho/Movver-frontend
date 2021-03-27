import React, { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet, KeyboardTypeOptions, Image } from "react-native";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { blue, grey } from "../../styles/color.css";

const MvInput = ({
  value,
  setCallback,
  placeholder,
  icon,
  iconSize,
  keyboardType,
  secureTextEntry,
}: {
  value: string;
  setCallback: (value: string) => void;
  placeholder: string;
  icon: string;
  iconSize?: number;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
}) => {
  const [isTyping, setIsTyping] = useState(false);

  return (
    <View style={[cStyle.container, isTyping ? cStyle.containerFocus : {}]}>
      <View style={cStyle.cardIcon}>
        <Icon
          name={icon}
          size={iconSize || 25}
          color={isTyping ? blue.c : grey.darken}
          style={cStyle.icon}
        />
      </View>
      <View style={cStyle.cardInput}>
        <View>
          {(isTyping || Boolean(value.length)) && (
            <Text style={cStyle.inputPlaceholder}>{placeholder.toUpperCase()}</Text>
          )}
        </View>
        <TextInput
          value={value}
          onFocus={() => setIsTyping(true)}
          onBlur={() => setIsTyping(false)}
          onChangeText={text => setCallback(text)}
          style={[cStyle.input]}
          placeholder={isTyping ? "" : placeholder}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
        />
      </View>
    </View>
  );
};
export default MvInput;

const cStyle = StyleSheet.create({
  container: {
    alignSelf: "center",
    margin: 5,
    flexDirection: "row",
    height: 70,
    padding: 5,
    width: "95%",
    borderBottomWidth: 1,
    borderColor: grey.lighten2,
  },
  containerFocus: {
    backgroundColor: "#fff",
    elevation: 1,
    shadowRadius: 10,
    shadowColor: grey.lighten5,
    borderColor: blue.lighten2,
  },
  inputPlaceholder: {
    opacity: 0.5,
    fontSize: 12,
    fontWeight: "bold",
    color: blue.darken2
  },
  input: {
    color: "black",
    fontSize: 16,
  },
  cardInput: {
    flex: 1,
    justifyContent: "space-between",
    marginTop: 5,
  },
  cardIcon: {
    justifyContent: "flex-end",
  },
  icon: {
    marginRight: 5,
    marginLeft: 5,
  },
});

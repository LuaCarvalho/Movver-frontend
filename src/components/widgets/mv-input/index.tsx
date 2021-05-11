import React, { useState } from "react";
import { Text, TextInput, TextInputProps, View, ViewStyle } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useFormContext } from "../../../context/FormContext";
import { blue, grey, red } from "../../../styles/color.css";
import { styleError, stylesEnum, styleSuccess as styles, styleSuccess } from "./styles.css";

interface MvInputProps extends TextInputProps {
  value: string;
  placeholder: string;
  icon: string;
  iconSize?: number;
  style?: ViewStyle | ViewStyle[];
}

export const MvInput = ({
  value,
  placeholder,
  icon,
  iconSize,
  style,
  ...rest
}: MvInputProps) => {
  const [isTyping, setIsTyping] = useState(false);
  const { isError, fieldName, msg, add } = useFormContext();

  const iconColor = (): string => {
    if (isError) return red.c;
    if (isTyping) return blue.c;
    return grey.darken;
  };

  function getPropertiesFrom(propertie: string, object: Object) {
    return Object.entries(object).find(s => {
      if (s[0] === propertie) return s;
    });
  }

  const getStyle = (propertie: stylesEnum) =>
    isError ? getPropertiesFrom(propertie, styleError) : getPropertiesFrom(propertie, styleSuccess);

  return (
    <View
      style={[
        getStyle(stylesEnum.container),
        isTyping ? getStyle(stylesEnum.containerFocus) : {},
        style,
      ]}
    >
      <View style={getStyle(stylesEnum.cardIcon)}>
        <Icon name={icon} size={iconSize || 25} color={iconColor()} style={styles.icon} />
      </View>
      <View style={getStyle(stylesEnum.cardInput)}>
        <View>
          {(isTyping || Boolean(value.length)) && (
            <Text style={getStyle(stylesEnum.inputPlaceholder)}>{placeholder.toUpperCase()}</Text>
          )}
        </View>
        <TextInput
          value={value}
          onFocus={() => setIsTyping(true)}
          onBlur={() => setIsTyping(false)}
          style={getStyle(stylesEnum.input)}
          placeholder={isTyping ? "" : placeholder}
          {...rest}
        />
      </View>
    </View>
  );
};

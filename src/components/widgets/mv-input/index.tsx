import React, { useState } from "react";
import { Text, TextInput, TextInputProps, View, ViewStyle } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { blue, grey } from "../../../styles/color.css";
import { styleSuccess as styles, styleSuccess } from "./styles.css";

interface MvInputProps extends TextInputProps {
  value: string;
  placeholder: string;
  icon: string;
  iconSize?: number;
  style?: ViewStyle | ViewStyle[];
}

export const MvInput = ({ value, placeholder, icon, iconSize, style, ...rest }: MvInputProps) => {
  const [isTyping, setIsTyping] = useState(false);

  const iconColor = (): string => {
    return isTyping ? blue.c : grey.darken;
  };

  return (
    <View style={[styleSuccess.container, isTyping ? styleSuccess.containerFocus : {}, style]}>
      <View style={styleSuccess.cardIcon}>
        <Icon name={icon} size={iconSize || 25} color={iconColor()} style={styles.icon} />
      </View>
      <View style={styleSuccess.cardInput}>
        <View>
          {(isTyping || Boolean(value.length)) && (
            <Text style={styleSuccess.inputPlaceholder}>{placeholder.toUpperCase()}</Text>
          )}
        </View>
        <TextInput
          value={value}
          onFocus={() => setIsTyping(true)}
          onBlur={() => setIsTyping(false)}
          style={styleSuccess.input}
          placeholder={isTyping ? "" : placeholder}
          {...rest}
        />
      </View>
    </View>
  );
};

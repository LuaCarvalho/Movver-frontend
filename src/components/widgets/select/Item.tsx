import React, { useEffect, useState } from "react";
import { Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from "react-native";

import appCss from "../../../styles/app.css";

const SelectItem = ({
  value,
  newValue,
  setValue,
}: {
  value: any;
  newValue: any;
  setValue: Function;
}) => {
  const [icon, setIcon] = useState("radiobox-blank");

  //Executa qnd este componente Item for selecionado
  function onSelect() {
    //Se o Item não estiver marcado, marque-o
    if (icon === "radiobox-blank" && newValue !== value) setIcon("radiobox-marked");
    setValue(value);
  }

  useEffect(() => {
    if (newValue !== value) setIcon("radiobox-blank")
  }, [newValue]);

  return (
    <TouchableOpacity onPress={onSelect} style={[appCss.textIcon, styles.item]}>
      <Icon name={icon} size={20} color="gray" />
      <Text style={styles.itemText}>{value}</Text>
    </TouchableOpacity>
  );
};

export default SelectItem;

const styles = StyleSheet.create({
  item: {
    margin: 5,
  },
  itemText: {
    marginLeft: 5,
  },
});

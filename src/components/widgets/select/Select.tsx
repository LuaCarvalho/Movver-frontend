import React, { useState } from "react";
import { StyleSheet, Text, Pressable, View } from "react-native";

import { item } from "@model/types";
import Item from "./Item";
import MvModal from "../MvModal";

const Select = ({ setValue, items }: { setValue: Function; items: item[] | any[] }) => {
  const [newValue, setNewValue] = useState(null);

  //Descobre que tipagem o array de items recebeu (pode ser um array simples ou type item)
  const typeItems = typeof items[0] === "object";

  const title = newValue ? String(newValue) : "Selecione";

  //Callback que será enviada ao elemento filho Item sempre q o valor mudar
  function onChangeValue(value: any) {
    setValue(value);
    setNewValue(value);
  }
  return (
    <MvModal title={title}>
      <View style={styles.items}>
        {typeItems
          ? items.map(({ label, value }) => (
              //Se o valor vier como um objeto do tipo "item" || Array<item>
              <Item
                label={label}
                value={value}
                setValue={onChangeValue}
                newValue={newValue}
                key={value}
              />
            ))
          : items.map(value => (
              //Se o valor vier como um tipo primitivo || Array<number | string>
              <Item
                value={value}
                setValue={onChangeValue}
                newValue={newValue}
                key={String(value)}
              />
            ))}
      </View>
    </MvModal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centeredView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    flex: 1,
    minHeight: "40%",
    alignSelf: "flex-end",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    elevation: 100,
  },
  buttonOpen: {
    width: "100%",
  },
  buttonClose: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2196F3",
    padding: 5,
    borderRadius: 10,
  },
  buttonCloseText: {
    color: "black",
    fontSize: 15,
    opacity: 0.5,
  },
  textStyle: {
    fontSize: 16,
    color: "black",
  },
  textSelect: {
    fontSize: 16,
    color: "black",
    opacity: 0.5,
  },
  modalText: {
    color: "black",
    fontSize: 17,
    opacity: 0.6,
    marginBottom: 15,
    textAlign: "center",
  },
  items: {
    flexGrow: 1,
  },
});

export default Select;

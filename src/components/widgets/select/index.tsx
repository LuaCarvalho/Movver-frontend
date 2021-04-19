import React, { useMemo, useState } from "react";
import { StyleSheet, View } from "react-native";
import MvModal from "../mv-modal";
import Item from "./select-item";

type item = { label: string; value: any };
type items = item[] | string[] | number[];

const Select = ({ setValue, items }: { setValue: Function; items: items }) => {
  const [newValue, setNewValue] = useState(null);

  const title = newValue ? String(newValue) : "Selecione";

  //Função q transforma qlqr tipo de array em uma array de "item"
  function transformToItems(arr: items): item[] {
    if (typeof arr[0] === "object") return arr as item[];
    return arr.map(i => ({ value: i, label: String(i) }));
  }

  //useMemo -> evita que essa função seja chamada repetidas vezes desnecessariamente
  const itemsList: item[] = useMemo(() => transformToItems(items), [items])

  //Callback que será enviada ao elemento filho Item sempre q o valor mudar
  function onChangeValue(value: any) {
    setValue(value);
    setNewValue(value);
  }
  
  return (
    <MvModal title={title}>
      <View style={styles.items}>
        {itemsList.map(({ label, value }) => (
          //Se o valor vier como um objeto do tipo "item" || Array<item>
          <Item
            label={label}
            value={value}
            setValue={onChangeValue}
            newValue={newValue}
            key={value}
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

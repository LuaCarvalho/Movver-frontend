import React, { useEffect, useState } from "react";
import { Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Item from "./Item";

const Select = ({
  label,
  setValue,
  items,
}: {
  label: string;
  setValue: Function;
  items: Array<any>;
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [newValue, setNewValue] = useState(null);

  //Callback que será enviada ao elemento filho Item sempre q o valor mudar
  function onChangeValue(value: any) {
    setValue(value);
    setNewValue(value);
  }

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        collapsable={true}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        {/* Quando o modal estiver ativo, essa view ocupará todo o espaço
         * O items na tela se ajustam em relação a ela */}
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Selecione</Text>
            <View style={styles.items}>
              {items.map(item => (
                <Item setValue={onChangeValue} value={item} newValue={newValue} key={item} />
              ))}
            </View>
            <Pressable style={styles.buttonClose} onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.buttonCloseText}>Pronto</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <TouchableOpacity style={styles.buttonOpen} onPress={() => setModalVisible(true)}>
        <Text style={styles.textSelect}>{newValue ? newValue : label}</Text>
      </TouchableOpacity>
    </View>
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
    elevation: 5,
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

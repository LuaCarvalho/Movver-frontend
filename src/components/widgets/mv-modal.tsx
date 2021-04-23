import React, { useState } from "react";
import { Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { grey } from "../../styles/color.css";

export const MvModal = ({
  title = "Selecione",
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Modal animationType="slide" transparent={true} visible={visible} collapsable={true}>
        <TouchableOpacity style={styles.view} onPressIn={() => setVisible(false)} />
        <View style={[styles.view, styles.viewBottom]}>
          <Text style={styles.modalText}>Selecione</Text>
          <View style={styles.children}>{children}</View>
          <Pressable style={styles.buttonClose} onPress={() => setVisible(!visible)}>
            <Text style={styles.buttonCloseText}>Pronto</Text>
          </Pressable>
        </View>
      </Modal>
      <TouchableOpacity style={styles.buttonOpen} onPress={() => setVisible(true)}>
        <Text style={styles.textSelect}>{title}</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    width: "100%",
  },
  viewBottom: {
    maxHeight: "50%",
    alignSelf: "flex-end",
    backgroundColor: grey.lighten4,
    borderRadius: 10,
    padding: 5,
  },
  children: {
    flexGrow: 1,
    margin: 5,
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
    textAlign: "center",
  },
  items: {
    flexGrow: 1,
  },
});

import React, { createContext, useEffect, useState } from "react";
import { Modal, StyleSheet, Text, Pressable, View, ViewStyle, TextStyle } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export interface StyleMvModel {
  horizontalView?: ViewStyle;
  verticalView: ViewStyle;
  internalButton?: ViewStyle;
  internalButtonText?: TextStyle;
}

interface Context {
  visible: boolean;
  setVisible: Function;
}

export const ModalContext = createContext({} as Context);

const MvModel = ({
  title = "Selecione",
  style,
  showCloseButton = true,
  children,
}: {
  title?: string;
  style?: StyleMvModel;
  showCloseButton?: boolean;
  children: React.ReactNode;
}) => {
  const [visible, setVisible] = useState(false);

  function close() {
    setVisible(false)
  }

  return (
    <ModalContext.Provider value={{ visible, setVisible: close }}>
      <Modal animationType="slide" transparent={true} visible={visible} collapsable={true}>
        {/* Quando o modal estiver ativo, essa view ocupará todo o espaço
         * O items na tela se ajustam em relação a ela */}
        <View style={[compentStyle.horizontalView, style?.horizontalView]}>
          <View style={[compentStyle.verticalView, style?.verticalView]}>
            <Text style={compentStyle.modalText}>Selecione</Text>
            {children}
            {showCloseButton && (
              <Pressable style={compentStyle.buttonClose} onPress={() => setVisible(!visible)}>
                <Text style={compentStyle.buttonCloseText}>Pronto</Text>
              </Pressable>
            )}
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={[compentStyle.buttonOpen, style?.internalButton]}
        onPress={() => setVisible(true)}
      >
        <Text style={[compentStyle.textSelect, style?.internalButtonText]}>{title}</Text>
      </TouchableOpacity>
    </ModalContext.Provider>
  );
};

export default MvModel;

const compentStyle = StyleSheet.create({
  horizontalView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  verticalView: {
    flex: 1,
    maxHeight: "50%",
    alignSelf: "flex-end",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
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

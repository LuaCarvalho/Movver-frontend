import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

import MvButton from "../widgets/MvButton";

import appCss from "../../styles/app.css";
import * as colors from "../../styles/color.css";
import { useNavigation } from "@react-navigation/core";

const Login: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <View style={cStyle.container}>
      <View style={cStyle.form}>
        <Text>Apenas para descomplicar sua vida!</Text>
        <TextInput placeholder="Username" style={cStyle.inputs} />
        <TextInput placeholder="Senha" style={cStyle.inputs} />
        <MvButton style={cStyle.buttonLogin} action={() => navigate("PrivateNavigator")}>
          <Text>Entrar</Text>
        </MvButton>
      </View>
    </View>
  );
};

export default Login;

const cStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.grey.lighten2,
  },
  form: {
    flex: 1,
    width: "90%",
    padding: 10,
    justifyContent: "center",
    backgroundColor: colors.grey.lighten3,
  },
  inputs: {
    color: "black",
    backgroundColor: "white",
    borderWidth: 0.5,
    padding: 5,
    margin: 5,
  },
  buttonLogin: {
    margin: 5,
  },
});

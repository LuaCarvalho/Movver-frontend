import React from "react";
import { View, Text, StyleSheet } from "react-native";

import MvButton from "../widgets/MvButton";

import appCss from "../../styles/app.css";
import { useNavigation } from '@react-navigation/core';

const Register: React.FC = () => {

    const { navigate } = useNavigation();

  return (
    <View style={cStyle.container}>
      <Text>Registrar</Text>
      <View style={cStyle.form}>
        <MvButton  action={() => navigate("Login")} style={cStyle.buttonLogin}>
          <Text>Ok</Text>
        </MvButton>
        <MvButton action={() => navigate("Login")} style={cStyle.buttonLogin} >
          <Text>Ja possui uma conta?</Text>
        </MvButton>
      </View>
    </View>
  );
};

export default Register;

const cStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonLogin: {
    width: 300,
    margin: 5,
  },
  form: {
    flex: 1,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center"
  }
});

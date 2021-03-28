import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/core";

import * as colors from "../../styles/color.css";
import appCss from "../../styles/app.css";
import authCss from "../../styles/auth.css";

import MvButton from "../widgets/MvButton";
import MvInput from "../../components/widgets/MvInput";

import { Login_CF } from "../../domain/services/auth";

const Login: React.FC = () => {
  const { navigate } = useNavigation();
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <View style={authCss.container}>
      <View style={authCss.mainView}>
        <View style={cStyle.user}>
          <Image style={cStyle.image} source={require("../../assets/perfil.png")} />
          <Text style={{ fontSize: 20 }}>Seja bem-vindo</Text>
          <Text>Faça a autenticação para continuar</Text>
        </View>
        <View style={cStyle.form}>
          <MvInput
            value={phone}
            setCallback={setPhone}
            icon="phone-outline"
            placeholder="phone"
            keyboardType="phone-pad"
          />
          <MvInput
            value={password}
            setCallback={setPassword}
            icon="lock-outline"
            placeholder="Senha"
            secureTextEntry
          />
        </View>
        <MvButton
          style={authCss.loginButton}
          action={() => navigate("PrivateNavigator")}
        >
          <Text style={cStyle.loginText}>Entrar</Text>
        </MvButton>
        <View style={authCss.cardRegister}>
          <Text style={{ opacity: 0.8 }}>Ainda não possui uma conta?</Text>
          <TouchableOpacity onPress={() => navigate("Register")}>
            <Text style={authCss.alreadyExistOrNo}>Crie uma nova conta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

const cStyle = StyleSheet.create({
  user: {
    justifyContent: "center",
    alignItems: "center",
    margin: 40,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  form: {
    minHeight: "20%",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  loginButton: {
    height: 40,
    width: "70%",
    alignSelf: "center",
    borderRadius: 10,
    justifyContent: "center",
  },
  loginText: {
    fontSize: 16,
    color: "white",
    textTransform: "uppercase",
  },
  cardRegister: {
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    padding: 5,
  },
});

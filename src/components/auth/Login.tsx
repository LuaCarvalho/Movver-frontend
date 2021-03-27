import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/core";

import MvButton from "../widgets/MvButton";

import appCss from "../../styles/app.css";
import authCss from "../../styles/auth.css";

import * as colors from "../../styles/color.css";
import MvInput from "../../components/widgets/MvInput";

const Login: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <View style={authCss.container}>
      <View style={authCss.card}>
        <View style={cStyle.user}>
          <Image style={cStyle.image} source={require("../../assets/perfil.png")} />
          <Text style={{ fontSize: 20 }}>Seja bem-vindo</Text>
          <Text>Faça a autenticação para continuar</Text>
        </View>
        <View>
          <MvInput icon="email-outline" placeholder="Email" keyboardType="email-address" />
          <MvInput icon="lock-outline" placeholder="Senha" secureTextEntry />
        </View>
        <MvButton style={authCss.loginButton} action={() => navigate("PrivateNavigator")}>
          <Text style={cStyle.loginText}>Entrar</Text>
        </MvButton>
        <View style={authCss.cardRegister}>
          <Text style={{ opacity: 0.8 }}>Ainda não possui uma conta?</Text>
          <TouchableOpacity onPress={() => navigate("Register")}>
            <Text style={{ color: colors.blue.darken2, fontSize: 16 }}>Crie uma nova conta</Text>
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
    margin: 50,
  },
  image: {
    marginRight: 10,
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
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

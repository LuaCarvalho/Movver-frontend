import React from "react";
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/core";

import MvButton from "../widgets/MvButton";
import MvInput from "../../components/widgets/MvInput";

import appCss from "../../styles/app.css";
import * as colors from "../../styles/color.css";
import authCss from "../../styles/auth.css";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { ScrollView } from "react-native-gesture-handler";

const Login: React.FC = () => {
  const { navigate, goBack } = useNavigation();

  return (
    <View style={authCss.container}>
      <View style={authCss.card}>
        <TouchableOpacity onPress={goBack} style={{ width: 45 }}>
          <Icon style={{ marginLeft: 10 }} name="keyboard-backspace" size={45} />
        </TouchableOpacity>

        <View style={cStyle.infos}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Seja bem-vindo</Text>
          <Text>Crie uma conta para aproveitar todos os recursos</Text>
        </View>

        <ScrollView style={authCss.form}>
          <MvInput icon="account-outline" placeholder="Nome" />
          <MvInput icon="cellphone" placeholder="Número do telefone" keyboardType="phone-pad" />
          <MvInput
            icon="calendar-outline"
            placeholder="Data de nascimento"
            keyboardType="number-pad"
          />
          <MvInput icon="wallet-outline" placeholder="CPF" keyboardType="number-pad" />
          <MvInput icon="lock-outline" placeholder="Senha" secureTextEntry />
          <MvInput icon="lock" placeholder="Repetir senha" secureTextEntry />
        </ScrollView>

        <MvButton style={authCss.loginButton} action={() => navigate("PrivateNavigator")}>
          <Text style={authCss.registerText}>Criar conta</Text>
        </MvButton>

        <View style={authCss.cardRegister}>
          <Text style={{ opacity: 0.8 }}>Já possui uma conta?</Text>
          <TouchableOpacity>
            <Text
              onPress={() => navigate("Login")}
              style={{ color: colors.blue.darken2, fontSize: 16 }}
            >
              Entre
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

const cStyle = StyleSheet.create({
  infos: {
    justifyContent: "center",
    alignItems: "center"
  }
});

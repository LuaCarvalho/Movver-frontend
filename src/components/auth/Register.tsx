import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/core";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import MvButton from "../widgets/MvButton";
import MvInput from "../../components/widgets/MvInput";

import appCss from "../../styles/app.css";
import * as colors from "../../styles/color.css";
import authCss from "../../styles/auth.css";

import User from "../../model/classes/User";

const Login: React.FC = () => {
  const { navigate, goBack } = useNavigation();

  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [birthday, setBirthday] = useState<string>("");
  const [cpf, setCpf] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmpassword, setConfirmPassword] = useState<string>("");

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
          <MvInput placeholder="Nome" value={name} setCallback={setName} icon="account-outline" />
          <MvInput
            placeholder="Número do telefone"
            value={phone}
            setCallback={setPhone}
            icon="cellphone"
            keyboardType="phone-pad"
          />
          <MvInput
            placeholder="Data de nascimento"
            value={birthday}
            setCallback={setBirthday}
            icon="calendar-outline"
            keyboardType="number-pad"
          />
          <MvInput
            placeholder="CPF"
            value={cpf}
            setCallback={setCpf}
            icon="wallet-outline"
            keyboardType="number-pad"
          />
          <MvInput
            placeholder="Senha"
            value={password}
            setCallback={setPassword}
            icon="lock-outline"
            secureTextEntry
          />
          <MvInput
            placeholder="Repetir senha"
            value={confirmpassword}
            setCallback={setConfirmPassword}
            icon="lock"
            secureTextEntry
          />
        </ScrollView>

        <MvButton
          style={authCss.loginButton}
          action={() => console.log(new User(name, Number(phone), password, birthday, cpf))}
        >
          <Text style={authCss.registerText}>Criar conta</Text>
        </MvButton>

        <View style={authCss.cardRegister}>
          <Text style={{ opacity: 0.8 }}>Já possui uma conta?</Text>
          <TouchableOpacity>
            <Text onPress={goBack} style={{ color: colors.blue.darken2, fontSize: 16 }}>
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
    alignItems: "center",
  },
});

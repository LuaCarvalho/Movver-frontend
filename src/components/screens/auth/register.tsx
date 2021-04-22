import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import authCss from "../../../styles/auth.css";
import MvButton from "../../widgets/mv-button";
import MvInput from "../../widgets/mv-input";


export const Register = () => {
  const { navigate, goBack } = useNavigation();

  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [birthday, setBirthday] = useState<string>("");
  const [cpf, setCpf] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmpassword, setConfirmPassword] = useState<string>("");

  return (
    <View style={authCss.container}>
      <View style={authCss.mainView}>
        <TouchableOpacity onPress={goBack} style={{ width: 45 }}>
          <Icon style={{ marginLeft: 10 }} name="keyboard-backspace" size={45} />
        </TouchableOpacity>

        <View style={cStyle.infos}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Seja bem-vindo</Text>
          <Text>Crie uma conta para aproveitar todos os recursos</Text>
        </View>

        <View  style={authCss.form}>
          <ScrollView>
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
            {/* <MvInput
            placeholder="CPF"
            value={cpf}
            setCallback={setCpf}
            icon="wallet-outline"
            keyboardType="number-pad"
          /> */}
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
        </View>

        <MvButton
          style={authCss.loginButton}
          action={() => console.log(name, phone, password, birthday, cpf)}
        >
          <Text style={authCss.registerText}>Criar conta</Text>
        </MvButton>

        <View style={authCss.cardRegister}>
          <Text style={{ opacity: 0.8 }}>Deseja ser um motorista?</Text>
          <TouchableOpacity onPress={goBack}>
            <Text style={authCss.alreadyExistOrNo}>Cadastro para motorista</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const cStyle = StyleSheet.create({
  infos: {
    justifyContent: "center",
    alignItems: "center",
  },
});

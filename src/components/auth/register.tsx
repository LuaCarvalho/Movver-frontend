import { useNavigation } from "@react-navigation/core";
import React, { useMemo, useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Utils } from "../../domain/services/function/utils";
import authCss from "../../styles/auth.css";
import { MvButton } from "../widgets/mv-button";
import { MvInput } from "../widgets/mv-input";

export const Register = () => {
  const { navigate, goBack } = useNavigation();
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [birthday, setBirthday] = useState<string>("");
  const [cpf, setCpf] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmpassword, setConfirmPassword] = useState<string>("");

  const formattedPhone = useMemo(() => Utils.formatPhoneNumber(phone), [phone]);
  const formattedBirthday = useMemo(() => {
    let v = birthday;
    v = v.replace(/\D/g, "");
    v = v.replace(/^(\d{2})(\d)/g, "$1/$2");
    v = v.replace(/(\d)(\d{4})$/, "$1/$2");
    const date = v.split("/");
    const isValid = new Date(`${date[1]}/${date[0]}/${date[2]}`);
    return v;
  }, [birthday]);

  return (
    <SafeAreaView style={authCss.container}>
      <View style={authCss.mainView}>
        <TouchableOpacity onPress={goBack} style={styles.return}>
          <Icon style={{ marginLeft: 10 }} name="keyboard-backspace" size={45} />
        </TouchableOpacity>

        <View style={styles.infos}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Seja bem-vindo</Text>
          <Text>Crie uma conta para aproveitar todos os recursos</Text>
        </View>

        <View style={authCss.form}>
          <ScrollView>
            <MvInput
              placeholder="Nome"
              value={name}
              onChangeText={setName}
              icon="account-outline"
            />
            <MvInput
              placeholder="Número do telefone"
              value={formattedPhone}
              maxLength={15}
              onChangeText={setPhone}
              icon="cellphone"
              keyboardType="phone-pad"
            />
            <MvInput
              placeholder="Data de nascimento"
              maxLength={10}
              editable={false}
              value={formattedBirthday}
              onChangeText={setBirthday}
              icon="calendar-outline"
              keyboardType="number-pad"
            />
            <MvInput
              placeholder="Senha"
              value={password}
              onChangeText={setPassword}
              icon="lock-outline"
              secureTextEntry
            />
            <MvInput
              placeholder="Repetir senha"
              value={confirmpassword}
              onChangeText={setConfirmPassword}
              icon="lock"
              secureTextEntry
            />
          </ScrollView>
        </View>

        <MvButton
          propStyle={authCss.loginButton}
          onPress={() => console.log(name, phone, password, birthday, cpf)}
        >
          <Text style={authCss.registerText}>Criar conta</Text>
        </MvButton>

        <View style={authCss.cardRegister}>
          <Text style={{ opacity: 0.8 }}>Já possui uma conta?</Text>
          <TouchableOpacity onPress={goBack}>
            <Text style={authCss.alreadyExistOrNo}>Entre</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  return: {},
  infos: {
    justifyContent: "center",
    alignItems: "center",
  },
});

import { useNavigation } from "@react-navigation/core";
import React, { useMemo, useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useAuthContext } from "../../context/auth-context";
import { iClient } from "../../domain/model/interfaces/iClient";
import { ClientHttp } from "../../domain/services/api/client-http";
import { Utils } from "../../domain/services/function/utils";
import { mainRoutes } from "../../routes/routes-enum";
import authCss from "../../styles/auth.css";
import { MvButton } from "../widgets/mv-button";
import { MvInput } from "../widgets/mv-input";

export const Register = () => {
  const { signIn } = useAuthContext();

  const { goBack, navigate } = useNavigation();
  const [name, setName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [birthday, setBirthday] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmpassword, setConfirmPassword] = useState<string>("");

  const formattedPhone: string = useMemo(() => Utils.formatPhoneNumber(phoneNumber), [phoneNumber]);

  const formattedBirthday: [string, boolean] = useMemo(() => Utils.maskDate(birthday), [birthday]);

  async function handlerRegister() {
    const client: iClient = {
      name,
      phoneNumber,
      birthday,
      password,
    };
    console.log("enviado: ", client)
    const clientSaved: iClient = await ClientHttp.save(client);
    console.log("salvo: ", clientSaved);
    const signed = await signIn(clientSaved.phoneNumber, clientSaved.password);
    console.log("logou", signed)
    if (signed) navigate(mainRoutes.MAIN, { screen: mainRoutes.HOME });
    else console.log("Login ou senha informados são invalidos");
  }

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
              onChangeText={setPhoneNumber}
              icon="cellphone"
              keyboardType="phone-pad"
            />
            <MvInput
              placeholder="Data de nascimento"
              maxLength={10}
              editable={false}
              value={formattedBirthday[0]}
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

        <MvButton propStyle={authCss.loginButton} onPress={handlerRegister}>
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

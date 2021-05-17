import { useNavigation } from "@react-navigation/core";
import React, { useMemo, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuthContext } from "../../context/auth-context";
import { Utils } from "../../domain/services/function/utils";
import { authRoutes, mainRoutes } from "../../routes/routes-enum";
import authCss from "../../styles/auth.css";
import { MvButton } from "../widgets/mv-button";
import { MvInput } from "../widgets/mv-input";

export const Login = () => {
  const { navigate } = useNavigation();
  const { signIn, signed } = useAuthContext();

  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const formattedPhone = useMemo(() => Utils.formatPhoneNumber(phone), [phone]);

  function handlerRegister() {
    navigate(authRoutes.AUTH_REGISTER);
  }

  async function handlerLogin() {
    const signed = await signIn(phone, password);
    if (signed) navigate(mainRoutes.MAIN, { screen: mainRoutes.HOME });
    else console.log("Login ou senha informados são invalidos")
  }

  return (
    <SafeAreaView style={authCss.container}>
      <View style={authCss.mainView}>
        <View style={cStyle.user}>
          <Image style={cStyle.image} source={require("../../assets/perfil.jpeg")} />
          <Text style={{ fontSize: 20 }}>Seja bem-vindo</Text>
          <Text>Faça a autenticação para continuar</Text>
        </View>
        <View style={authCss.form}>
          <MvInput
            value={formattedPhone}
            placeholder="Número de telefone"
            icon="phone-outline"
            maxLength={15}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />
          <MvInput
            value={password}
            icon="lock-outline"
            placeholder="Senha"
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
        <MvButton propStyle={authCss.loginButton} onPress={handlerLogin}>
          <Text style={cStyle.loginText}>Entrar</Text>
        </MvButton>
        <View style={authCss.cardRegister}>
          <Text style={{ opacity: 0.8 }}>Ainda não possui uma conta?</Text>
          <TouchableOpacity onPress={handlerRegister}>
            <Text style={authCss.alreadyExistOrNo}>Crie uma nova conta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

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

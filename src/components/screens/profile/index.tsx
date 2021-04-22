/** Componente para o perfil do usuário
 */
import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";
import { freights } from "../../../domain/services/mocks/mock";
import { appCss } from "../../../styles/app.css";
import { FreightCard } from "./freight-card";

const Profile = () => {
  const { navigate } = useNavigation();
  
  function handlerSettings() {
    navigate("profile-settings");
  }

  return (
    <SafeAreaView style={appCss.container}>
      <View style={styles.card}>
        <TouchableOpacity onPress={handlerSettings} style={styles.settings}>
          <Icon color="gray" name="settings" size={25} />
        </TouchableOpacity>
        <View>
          <Image style={styles.img} source={require("../../../assets/perfil.jpeg")} />
          <Text style={styles.name}>Joás Andrade</Text>
        </View>
      </View>
      <View style={[styles.card, styles.infoCard]}>
        <View style={styles.info}>
          <Text style={appCss.infoText}>Email</Text>
          <Text>joas7777777@hotmail.com</Text>
        </View>
        <View style={styles.info}>
          <Text style={appCss.infoText}>Número de Telefone</Text>
          <Text>(62) 98390-9812</Text>
        </View>
      </View>
      <View style={[styles.card, styles.lastFreightsCard]}>
        <Text style={appCss.title}>Fretes recentes</Text>
        <FreightCard freightList={freights} />
        <TouchableOpacity>
          <Text style={styles.lastFreightsButton}>Ver mais antigos</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  card: {
    flexGrow: 1,
    marginBottom: 5,
    backgroundColor: "white",
    width: "95%",
    elevation: 3,
    padding: 5,
  },
  settings: {
    alignSelf: "flex-end",
  },
  infoCard: {
    flexGrow: 1,
  },
  lastFreightsCard: {
    flexGrow: 5,
    justifyContent: "space-around",
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 100,
    alignSelf: "center",
  },
  name: {
    fontSize: 20,
    alignSelf: "center",
  },
  info: {
    marginBottom: 5,
  },
  lastFreightsButton: {
    fontSize: 15,
    opacity: 0.5,
    alignSelf: "center",
  },
});

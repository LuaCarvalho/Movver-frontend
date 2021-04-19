/** Componente para o perfil do usuário
 */
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { freights } from "../../domain/model/mocks/mock";
import appCss from "../../styles/app.css";
import FreightCard from "../freight/freight-card";

const Profile: React.FC = () => {
  return (
    <View style={appCss.container}>
      <View style={[appCss.card, styles.profileCard]}>
        <Image style={styles.img} source={require("../../assets/perfil.jpeg")} />
        <Text style={styles.name}>Joás Andrade</Text>
      </View>
      <View style={[appCss.card, styles.infoCard]}>
        <View style={styles.info}>
          <Text style={appCss.infoText}>Email</Text>
          <Text>joas7777777@hotmail.com</Text>
        </View>
        <View style={styles.info}>
          <Text style={appCss.infoText}>Número de Telefone</Text>
          <Text>(62) 98390-9812</Text>
        </View>
      </View>
      <View style={[appCss.card, styles.lastFreightsCard]}>
        <Text style={appCss.title}>Fretes recentes</Text>
        <FreightCard freightList={freights} />
        <TouchableOpacity>
          <Text style={styles.lastFreightsButton}>Ver mais antigos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profileCard: {
    marginTop: 5,
    flexGrow: 1,
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

/** Componente para o perfil do usuário
 */
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";

import freights, * as Freights from "../store/mock";

import FreightCard from "./freight/FreightCard";
import { TouchableOpacity } from "react-native-gesture-handler";

const Profile: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.card, styles.profileCard]}>
        <Image style={styles.img} source={require("../assets/perfil.png")} />
        <Text style={styles.name}>Joás Andrade</Text>
      </View>
      <View style={[styles.card, styles.infoCard]}>
        <View style={styles.info}>
          <Text style={styles.infoTitle}>Email</Text>
          <Text>joas7777777@hotmail.com</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.infoTitle}>Número de Telefone</Text>
          <Text>(62) 98390-9812</Text>
        </View>
      </View>
      <View style={[styles.card, styles.lastFreightsCard]}>
        <Text style={styles.lastFreightsText}>Fretes recentes</Text>
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
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    flex: 1,
    width: "100%",
    padding: 10,
    margin: 5
  },
  profileCard: {
    flexGrow: 1,
    elevation: 1,
    width: "95%"
  },
  infoCard: {
    flexGrow: 1,
    elevation: 1,
    width: "95%"
  },
  lastFreightsCard: {
    flexGrow: 5,
    elevation: 1,
    width: "95%",
    justifyContent: "space-between",
  },
  img: {
    width: 60,
    height: 60,
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
  infoTitle: {
    fontSize: 16,
    elevation: 6,
    opacity: 0.6,
  },
  lastFreightsText: {
    fontSize: 20,
    opacity: 0.7,
    alignSelf:"center"
  },
  lastFreightsButton: {
    fontSize: 15,
    opacity: 0.5,
    alignSelf: "center",
  },
});

import React from "react";
import { View, Text, StyleSheet } from "react-native";

import mock from "../store/mock";

export default function Freights() {
  return (
    <View>
      {mock.map((m) => (
        <View style={styles.freight} key={m.id}>
          <Text>Motorista: {m.driver.name}</Text>
          <Text>Disponivel: {m.driver.available ? 'Disponivel' : 'Indisponivel'}</Text>
          <Text>Veiculo: {m.driver.vehicle } </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  freight: {
      borderWidth: 1,
      borderColor: "red",
      margin: 10
  },
});

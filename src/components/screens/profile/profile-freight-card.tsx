import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Freight } from '../../../domain/model/classes/Freight';
import { iFreight } from "../../../domain/model/interfaces/iFreight";
import { appCss } from "../../../styles/app.css";
import colorCss from "../../../styles/color.css";

export const FreightCard: React.FC<{ freight: iFreight }> = ({ freight })  => {
  const freightHistory = new Freight(freight);

  console.log(freight)
  console.log(freightHistory)


  return (
    <View key={freightHistory.id} style={styles.freightCard}>
      <View style={styles.dateCard}>
        <Text style={styles.dateText}>{freightHistory.startDate}</Text>
      </View>
      <View>
        <View style={appCss.textIcon}>
          <Icon name="room" size={20} color={"gray"} />
          <Text style={styles.text}>{freightHistory.origin.name}</Text>
        </View>
        <View style={appCss.textIcon}>
          <Icon name="room" size={20} color={"black"} />
          <Text style={styles.text}>{freightHistory.destination.name}</Text>
        </View>
      </View>
      <View style={styles.priceStatus}>
        <View style={appCss.textIcon}>
          <Icon name="circle" size={15} color={"gray"} />
          <Text style={[styles.text, styles.status]}>{freightHistory.status}</Text>
        </View>
        <View style={appCss.textIcon}>
          <Text style={styles.text}>R$ {freightHistory.price}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  freightCard: {
    marginHorizontal: 5,
    padding: 5,
    marginBottom: 5,
    elevation: 2,
    backgroundColor: "white",
    borderColor: "#2196f3",
    color: "white",
  },
  dateCard: {
    height: 25,
    padding: 5,
    borderRadius: 10,
    backgroundColor: colorCss.blue.c,
    alignSelf: "center",
    justifyContent: "center",
  },
  dateText: {
    fontSize: 15,
    color: "white",
  },
  text: {
    color: "black",
  },
  priceStatus: {
    flexDirection: "row",
    marginLeft: 3,
    marginRight: 3,
    justifyContent: "space-between",
  },
  status: {
    marginLeft: 3,
  },

});

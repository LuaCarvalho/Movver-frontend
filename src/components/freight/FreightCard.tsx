import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { Freight } from "../../store/mock";

const FreightCard = ({ freightList }: { freightList: Freight[] }) => {
  const list = freightList.sort((a, b) => {
    if (a.date.getTime() < b.date.getTime()) return 1;
    if (a.date.getTime() > b.date.getTime()) return -1;
    return 0;
  });

  return (
    <>
      {list.map((item) => (
        <View key={item.id} style={styles.myFreight}>
          <View style={styles.dateCard}>
            <Text style={styles.dateText}>{item.date.toLocaleString()}</Text>
          </View>
          <View>
            <Text style={styles.text}>{item.locationOrigin} </Text>
            <Text style={styles.text}>{item.locationDestination}</Text>
          </View>
          <View>
            <Text style={styles.text}>Estado: {item.status}</Text>
            <Text style={styles.text}>Valor: R$ {item.price}</Text>
          </View>
        </View>
      ))}
    </>
  );
};
export default FreightCard;

const styles = StyleSheet.create({
  myFreight: {
    paddingRight: 5,
    paddingLeft: 5,
    paddingBottom: 10,
    elevation: 2,
    backgroundColor: "#cfd8dc",
    borderRadius: 20,
    borderColor: "#2196f3",
    color: "white",
  },
  dateCard: {
    height: 25,
    padding: 5,
    elevation: 5,
    top: -5,
    borderRadius: 10,
    backgroundColor: "#2196f3",
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
});

import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Freight from "../../domain/model/interfaces/Freight";
import appCss from "../../styles/app.css"

import Icon from "react-native-vector-icons/MaterialIcons";

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
            <View style={appCss.textIcon}>
              <Icon name="room" size={20} color={"gray"} />
              <Text style={styles.text}>{item.locationOrigin}</Text>
            </View>
            <View style={appCss.textIcon}>
              <Icon name="room" size={20} color={"black"} />
              <Text style={styles.text}>{item.locationDestination}</Text>
            </View>
          </View>
          <View style={styles.priceStatus}>
            <View style={appCss.textIcon}>
              <Icon name="circle" size={15} color={"gray"} />
              <Text style={[styles.text, styles.status]}>{item.status}</Text>
            </View>
            <View style={appCss.textIcon}>
              <Text style={styles.text}>R$ {item.price}</Text>
            </View>
          </View>
        </View>
      ))}
    </>
  );
};
export default FreightCard;

const styles = StyleSheet.create({
  myFreight: {
    padding: 5,
    elevation: 2,
    backgroundColor: "white",
    borderRadius: 20,
    borderColor: "#2196f3",
    color: "white",
  },
  dateCard: {
    height: 25,
    padding: 5,
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
  priceStatus: {
    flexDirection: "row",
    marginLeft: 3,
    marginRight: 3,
    justifyContent: "space-between",
  },
  status: {
    marginLeft: 3
  },
});

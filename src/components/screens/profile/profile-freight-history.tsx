import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { iFreight } from "../../../domain/model/interfaces/iFreight";
import { appCss } from "../../../styles/app.css";
import colorCss from "../../../styles/color.css";

export const FreightHistory = ({ freightList }: { freightList: iFreight[] }) => {
  const list = freightList.sort((a, b) => {
    if (a.date.getTime() < b.date.getTime()) return 1;
    if (a.date.getTime() > b.date.getTime()) return -1;
    return 0;
  });

  return (
    <>
      {list.length ? (
        list.map(item => (
          <View key={item.id} style={styles.myFreight}>
            <View style={styles.dateCard}>
              <Text style={styles.dateText}>{item.date.toLocaleString()}</Text>
            </View>
            <View>
              <View style={appCss.textIcon}>
                <Icon name="room" size={20} color={"gray"} />
                <Text style={styles.text}>{item.origin}</Text>
              </View>
              <View style={appCss.textIcon}>
                <Icon name="room" size={20} color={"black"} />
                <Text style={styles.text}>{item.destination}</Text>
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
        ))
      ) : (
        <View style={styles.emptyList}>
          <Text style={styles.emptyListText}>Você ainda não contratou nem um frete</Text>
        </View>
      )}
    </>
  );
};

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
  emptyList: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  emptyListText: {
    fontSize: 17,
    opacity: 0.5
  }
});

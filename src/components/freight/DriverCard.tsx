import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import Driver from "../../domain/model/interfaces/Driver";

import appCss from "../../styles/app.css";
import { grey, green } from "../../styles/color.css";
import { truckBodyworkEnum } from "../../domain/model/types/enums";
import { numberSeparador } from "../../domain/services/function";

const DriverCard = ({ drivers }: { drivers: Array<Driver> }) => {
  const iconTruck = (type: truckBodyworkEnum) => {
    return type == truckBodyworkEnum.OPEN ? "dump-truck" : "truck";
  };

  return (
    <>
      {drivers.map(({ id, name, available, vehicle, location }) => (
        <View key={id} style={styles.driverInfo}>
          <View style={styles.driver}>
            <Image
              style={[styles.driverImg, { borderColor: available ? green.lighten3 : grey.darken }]}
              source={require("../../assets/perfil.png")}
            />
            <Text style={styles.driverName}>{name}</Text>
          </View>
          <View style={appCss.textIcon}>
            <Icon name={iconTruck(vehicle.truckBudyWork)} size={20} color={grey.darken3} />
            <Text> {vehicle.model}</Text>
          </View>
          <View style={appCss.textIcon}>
            <Icon name="weight-kilogram" size={20} color={grey.darken3} />
            <Text> {numberSeparador(vehicle.capacity)}</Text>
          </View>
          <View style={appCss.textIcon}>
            <Icon name="map-marker-radius" size={20} color={grey.darken3} />
            <Text> {location}</Text>
          </View>
        </View>
      ))}
    </>
  );
};

export default DriverCard;

const styles = StyleSheet.create({
  driverInfo: {
    elevation: 2,
    backgroundColor: "white",
    margin: 5,
    marginBottom: 10,
    borderRadius: 20,
    padding: 5,
  },
  driver: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 2,
  },
  driverName: {
    fontSize: 18,
  },
  driverImg: {
    marginRight: 10,
    width: 40,
    height: 40,
    borderRadius: 40,
    borderWidth: 3,
  },
});

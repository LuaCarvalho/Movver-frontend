import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { Driver, drivers, truckBodyworkEnum } from "../store/mock";
import appCss from "../styles/app.css";
import DriverCard from "./freight/DriverCard";

import Select from "./widgets/select/Select";

const Freights: React.FC = () => {
  const [filtredList, setFriltredList] = useState<Driver[]>(drivers);

  const [selectTruckBodywork, setSelectTruckBodywork] = useState<truckBodyworkEnum>(
    truckBodyworkEnum.OPEN
  );
  const [selectCapacity, setSelectCapacity] = useState<number>(1000);

  useEffect(() => {
    const newDriverList = filtredList.filter(driver => {
      const {
        vehicle: { capacity, truckBudyWork },
      } = driver;
      if (truckBudyWork == selectTruckBodywork) return driver;
      console.log(selectCapacity);
    });
    setFriltredList(newDriverList);
  }, [selectCapacity]);

  return (
    <View style={styles.container}>
      <View style={[styles.titleCard, appCss.card]}>
        <Text style={appCss.title}>Motoristas próximos</Text>
      </View>
      <View style={appCss.card}></View>
      <View style={[styles.optionsCard, appCss.card]}>
        <Text>Seleções</Text>
        <View style={styles.options}>
          <View style={appCss.textIcon}>
            <Text style={appCss.infoText}>Carroceria: </Text>
          </View>
          <View style={[appCss.textIcon]}>
            <Text style={appCss.infoText}>Capacidade de carga: </Text>
            <Select
              setValue={setSelectCapacity}
              items={[2000, 4000, 6000, 8000, 10000]}
              label="Selecione"
            />
          </View>
        </View>
      </View>
      <ScrollView style={[appCss.card, styles.driversCard]}>
        <DriverCard drivers={filtredList} />
      </ScrollView>
    </View>
  );
};

export default Freights;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleCard: {
    flexGrow: 1,
    marginTop: 5,
    alignItems: "center",
  },
  optionsCard: {
    flexGrow: 2,
    alignItems: "center",
  },
  driversCard: {
    flexGrow: 8,
  },
  options: {
    flex: 1,
    width: "100%",
    justifyContent: "space-around",
  },
  select: {
    justifyContent: "center",
    height: 10,
  },
});

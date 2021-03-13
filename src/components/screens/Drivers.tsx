import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { truckBodyworkEnum } from "../../model/types/enums";
import { drivers } from "../../model/mocks/mock";
import Driver from "@interfaces/Driver";
import appCss from "../../styles/app.css";
import DriverCard from "../freight/DriverCard";

import Select from "../widgets/select/Select";

const Drivers: React.FC = () => {
  const [filtredList, setFriltredList] = useState<Driver[]>(drivers);

  const [selectTruckBodywork, setSelectTruckBodywork] = useState(truckBodyworkEnum.ANY);
  const [selectCapacity, setSelectCapacity] = useState(0);

  useEffect(() => {
    const filtredCapacity = drivers.filter(driver => {
      const capacity = driver.vehicle.capacity;
      if (capacity >= selectCapacity) return driver;
    });
    const filtredTruckBodywork = filtredCapacity.filter(driver => {
      const truckBodyWork = driver.vehicle.truckBudyWork;
      if (selectTruckBodywork === truckBodyworkEnum.ANY) return driver;
      if (selectTruckBodywork === truckBodyWork) return driver;
    });
    setFriltredList(filtredTruckBodywork);
  }, [selectCapacity, selectTruckBodywork]);

  return (
    <View style={styles.container}>
      <View style={[styles.titleCard, appCss.card]}>
        <Text style={appCss.title}>Motoristas próximos</Text>
      </View>
      <View style={[styles.optionsCard, appCss.card]}>
        <Text>Seleções</Text>
        <View style={styles.options}>
          <View style={appCss.textIcon}>
            <Text style={appCss.infoText}>Carroceria: </Text>
            <Select setValue={setSelectTruckBodywork} items={Object.values(truckBodyworkEnum)} />
          </View>
          <View style={[appCss.textIcon]}>
            <Text style={appCss.infoText}>Capacidade de carga: </Text>
            <Select
              setValue={setSelectCapacity}
              items={[500, 1000, 2000, 4000, 6000, 8000, 10000]}
            />
          </View>
        </View>
      </View>
      <ScrollView style={[appCss.card, styles.driversCard]}>
        <Text
          style={styles.resultCounter}
        >{`Resultados: ${filtredList.length} de ${drivers.length}`}</Text>
        <DriverCard drivers={filtredList} />
      </ScrollView>
    </View>
  );
};

export default Drivers;

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
  resultCounter: {
    fontSize: 13,
    opacity: 0.5,
    alignSelf: "flex-end",
  },
});

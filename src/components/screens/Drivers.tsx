import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { truckBodyworkEnum, servicesEnum } from "../../domain/model/types/enums";

import { drivers } from "../../domain/model/mocks/mock";
import Driver from "../../domain/model/interfaces/Driver";


import appCss from "../../styles/app.css";
import DriverCard from "../freight/DriverCard";

import Select from "../widgets/select/Select";

const Drivers: React.FC = () => {
  const [filtredList, setFriltredList] = useState<Driver[]>(drivers);

  const [bodyworkFilter, setBodyworkFilter] = useState(truckBodyworkEnum.ANY);
  const [capacityFilter, setCapacityFilter] = useState(0);

  useEffect(() => {
    const filtredCapacity = drivers.filter(driver => {
      if (driver.vehicle.capacity >= capacityFilter) return driver;
    });
    const filtredTruckBodywork = filtredCapacity.filter(driver => {
      if (bodyworkFilter === truckBodyworkEnum.ANY) return driver;
      if (bodyworkFilter === driver.vehicle.truckBudyWork) return driver;
    });
    setFriltredList(filtredTruckBodywork);
  }, [capacityFilter, bodyworkFilter]);

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
            <Select setValue={setBodyworkFilter} items={Object.values(truckBodyworkEnum)} />
          </View>
          <View style={[appCss.textIcon]}>
            <Text style={appCss.infoText}>Capacidade de carga: </Text>
            <Select
              setValue={setCapacityFilter}
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

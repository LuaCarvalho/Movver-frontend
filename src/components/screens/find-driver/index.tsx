import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from 'react-native-safe-area-context';
import { truckBodyworkEnum } from "../../../domain/model/enums";
import { Driver } from "../../../domain/model/interfaces/Driver";
import driverHttp from "../../../domain/services/api/driver-http";
import { appCss } from "../../../styles/app.css";
import Select from "../../widgets/select";
import DriverCard from "./driver-card";

export const FindDriver: React.FC = () => {
  const [drivers, setDrivers] = useState<Driver[]>([]);

  const [bodyworkFilter, setBodyworkFilter] = useState(truckBodyworkEnum.ANY);
  const [capacityFilter, setCapacityFilter] = useState(0);

  useEffect(() => {
    driverHttp.getDrivers(bodyworkFilter).then(response => setDrivers(response));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.card, styles.titleCard]}>
        <Text style={appCss.title}>Motoristas próximos</Text>
      </View>
      <View style={[styles.card, styles.optionsCard]}>
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
      <ScrollView style={[styles.card, styles.driversCard]}>
        <Text
          style={styles.resultCounter}
        >{`Resultados: ${drivers.length} de ${drivers.length}`}</Text>
        <DriverCard drivers={drivers} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    flex: 1,
    paddingRight: 10,
    paddingLeft: 10,
    marginBottom: 5,
    backgroundColor: "white",
    width: "95%",
    elevation: 3,
    padding: 5,
  },
  titleCard: {
    justifyContent: "center",
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

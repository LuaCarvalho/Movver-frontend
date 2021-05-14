import { useNavigation } from "@react-navigation/core";
import React, { useEffect } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";
import { useLocalizationContext } from "../../../context/localization-context";
import { directionEnum } from "../../../domain/model/enums";
import { getCurrentLocation } from "../../../domain/services/maps/location";
import { secondaryRoutes } from "../../../routes/routes-enum";


export const Home: React.FC = () => {
  const { origin, addLocalization } = useLocalizationContext();
  const { navigate } = useNavigation();

  //Inicialmente o mapa irá mostrar a localização atual
  useEffect(() => {
    (async () => {
      const locationOrigin = await getCurrentLocation(directionEnum.ORIGIN);
      addLocalization(locationOrigin);
    })();
  }, []);

  return (
    <>
      <MapView style={styles.map} initialRegion={origin.region} showsUserLocation loadingEnabled />
      <View onTouchStart={() => navigate(secondaryRoutes.FREIGHTAGE)} style={styles.findButton}>
        <Text>Buscar?</Text>
      </View>
    </>
  );
};

export default Home;

const height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  findButton: {
    top: -(height / 1.25),
    height: 50,
    borderRadius: 50,
    elevation: 10,
    margin: 10,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});

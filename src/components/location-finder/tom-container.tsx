import React from "react";
import { ScrollView, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useLocalizationContext } from "../../context/localization-context";
import { useTomCompleteContext } from "../../context/tom-complete-context";
import { Address } from "../../domain/model/interfaces/Address";
import { Localization } from "../../domain/model/interfaces/Localization";
import { Result } from "../../domain/model/interfaces/TomTomSearch";
import { AddressHandler } from "../../domain/services/function/address-handler";
import { LocalizationHandler } from "../../domain/services/function/localization-handler";
import { getStateAbrev } from "../../domain/services/function/utils";
import { grey } from "../../styles/color.css";

export const TomContainer = () => {
  const { addLocalization } = useLocalizationContext();
  const { tomSearch, contextDirection, setContextQuery } = useTomCompleteContext();

  const textFrom = (text: string | undefined) => (text ? text + "," : "");

  const distanceFrom = (meters: number): string => {
    if (meters < 1000) return meters.toFixed(0) + "m";
    return (meters / 1000).toFixed(2) + "km";
  };

  function getPosition(result: Result): Localization {
    const latitude = result.position.lat;
    const longitude = result.position.lon;
    return LocalizationHandler.Create(contextDirection, latitude, longitude);
  }

  function getAddress(result: Result): Address {
    const { address, poi, id } = result;
    const resultId = id;
    const title = poi?.name || address?.streetName || "";
    const district = textFrom(address?.municipalitySubdivision);
    const city = textFrom(address?.municipality);
    const state = getStateAbrev(address?.countrySubdivision);
    const distance = result.dist;
    return AddressHandler.Create(
      resultId,
      title,
      district,
      city,
      state,
      distance,
      getPosition(result)
    );
  }

  function handlerOnPress(resultId: string) {
    const result = tomSearch.results.find(({ id }) => id === resultId);
    if (!result) return;
    const address = getAddress(result);
    const localization = address?.localization;
    const query = `${address.title},${address.district}${address.city}${address.state}`;
    setContextQuery(query);
    addLocalization(localization);
  }

  return (
    <ScrollView style={styles.container}>
      {tomSearch?.results
        ?.map(res => getAddress(res))
        .filter(p => p.title)
        .map(address => (
          <TouchableHighlight
            onPress={() => handlerOnPress(address.resultId)}
            key={address.resultId}
            underlayColor={grey.lighten3}
          >
            <View style={styles.addressContainer}>
              <View style={styles.addressCard}>
                <Icon name="map" size={22} color={grey.darken} />
                <View style={styles.titleAndIcon}>
                  <Text style={styles.textTitle}>{address.title}</Text>
                  <Text style={{ fontSize: 12, color: grey.darken }}>
                    {distanceFrom(address.distance)}
                  </Text>
                </View>
              </View>
              <Text
                style={styles.text}
              >{`${address.district} ${address.city} ${address.state}`}</Text>
            </View>
          </TouchableHighlight>
        ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  addressContainer: {
    borderBottomWidth: 0.8,
    borderColor: grey.lighten2,
    margin: 5,
  },
  addressCard: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    padding: 5,
  },
  textTitle: {
    paddingLeft: 5,
  },
  text: {
    paddingLeft: 5,
    opacity: 0.5,
  },
  titleAndIcon: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});

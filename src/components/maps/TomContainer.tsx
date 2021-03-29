import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { View, Text, StyleSheet, TouchableHighlight, ScrollView } from "react-native";
import { blue, grey } from "../../styles/color.css";

import { useTomCompleteContext } from "../../context/TomCompleteContext";

import { getStateAbrev } from "../../domain/services/function";

import { Locatization_CF } from "../../domain/services/localization/location";
import { Address_FC } from "../../domain/services/localization/address";

import Localization from "../../domain/model/interfaces/Localization";
import Address from "../../domain/model/interfaces/Address";
import { Result } from "../../domain/model/interfaces/TomTomSearch";

import { useLocalizationContext } from "../../context/LocalizationContext";

const MvContainer  = () => {
  const { addLocalization } = useLocalizationContext();
  const { tomSearch, contextDirection, setContextQuery } = useTomCompleteContext();

  const textFrom = (text: string | undefined) => (text ? text + "," : "");

  const distanceFrom = (meters: number): string => {
    if (meters < 1000) return meters.toFixed(0) + "m";
    return (meters / 1000).toFixed(2) + "km";
  };

  function getPosition(result: Result): Localization {
    const lat = result.position.lat;
    const lon = result.position.lon;
    return Locatization_CF(contextDirection, lat, lon);
  }

  function getAddress(result: Result): Address {
    const { address, poi, id } = result;
    const resultId = id;
    const title = poi?.name || address?.streetName || "";
    const district = textFrom(address?.municipalitySubdivision);
    const city = textFrom(address?.municipality);
    const state = getStateAbrev(address?.countrySubdivision);
    const distance = result.dist;
    return Address_FC(resultId, title, district, city, state, distance, getPosition(result));
  }

  function onPress(resultId: string) {
    const result = tomSearch.results.find(({ id }) => id === resultId);
    if (!result) return;
    const address = getAddress(result);
    const localization = address?.localization;
    const query = `${address.title},${address.district}${address.city}${address.state}`;
    setContextQuery(query);
    addLocalization(localization);
  }

  return (
    <ScrollView style={cStyle.container}>
      {tomSearch?.results
        ?.map(res => getAddress(res))
        .filter(p => p.title)
        .map(address => (
          <TouchableHighlight
            onPress={() => onPress(address.resultId)}
            key={address.resultId}
            underlayColor={grey.lighten3}
          >
            <View style={cStyle.addressContainer}>
              <View style={cStyle.addressCard}>
                <Icon name="map" size={22} color={grey.darken} />
                <View style={cStyle.titleAndIcon}>
                  <Text style={cStyle.textTitle}>{address.title}</Text>
                  <Text style={{ fontSize: 12, color: grey.darken }}>
                    {distanceFrom(address.distance)}
                  </Text>
                </View>
              </View>
              <Text
                style={cStyle.text}
              >{`${address.district} ${address.city} ${address.state}`}</Text>
            </View>
          </TouchableHighlight>
        ))}
    </ScrollView>
  );
};

export default MvContainer;

const cStyle = StyleSheet.create({
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

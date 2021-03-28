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


const MvContainer: React.FC = () => {
  const { addLocalization } = useLocalizationContext();
  const { tomSearch, direction } = useTomCompleteContext();

  const textFor = (text: string | undefined) => (text ? text + "," : "");

  function getPosition(result: Result): Localization {
    const lat = result.position.lat;
    const lon = result.position.lon;
    return Locatization_CF(direction, lat, lon);
  }

  function getAddress(result: Result): Address {
    const { address, poi, id } = result;
    const title = textFor(poi?.name || address.streetName);
    const district = textFor(address.municipalitySubdivision);
    const city = textFor(address.municipality);
    const stateFull = address.countrySubdivision;
    const state = getStateAbrev(stateFull);
    return Address_FC(id, title, district, city, state, getPosition(result));
  }

  return (
    <ScrollView style={cStyle.container}>
      {tomSearch?.results
        ?.map(getAddress)
        .filter(p => p.title)
        .map(({ id, title, district, city, state, localization }) => (
          <TouchableHighlight
            onPress={() => addLocalization(localization)}
            key={id}
            underlayColor={grey.lighten3}
          >
            <View style={cStyle.addressCard}>
              <View style={cStyle.addressTitle}>
                <Icon name="map" size={20} color={grey.darken} />
                <Text style={cStyle.addresTextTitle}>{title}</Text>
              </View>
              <Text style={cStyle.addresText}>{`${district} ${city} ${state}`}</Text>
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
  addresTextTitle: {
    paddingLeft: 5,
    opacity: 0.8,
    fontWeight: "bold",
  },
  addressTitle: {
    flexDirection: "row",
    padding: 5,
  },
  addressCard: {
    borderBottomWidth: 0.8,
    borderColor: grey.lighten2,
    margin: 5,
  },
  addresText: {
    paddingLeft: 5,
    opacity: 0.5,
  },
});

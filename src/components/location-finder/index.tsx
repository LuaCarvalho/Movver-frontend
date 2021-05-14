import React from "react";
import { StyleSheet, View } from "react-native";
import { directionEnum } from "../../domain/model/enums";
import { TomComplete } from "./tom-complete";
import { TomContainer } from "./tom-container";

export function LocationFinder() {
  return (
    <>
      <View style={cStyle.searches}>
        <TomComplete direction={directionEnum.ORIGIN} />
        <TomComplete direction={directionEnum.DESTINATION} />
      </View>
      <View style={cStyle.resultsContainer}>
        <TomContainer />
      </View>
    </>
  );
}

const cStyle = StyleSheet.create({
  searches: {
    margin: 10,
  },
  resultsContainer: {
    flex: 1,
    padding: 10,
  },
});

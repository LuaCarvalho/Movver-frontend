import React from "react";
import { StyleSheet, View } from "react-native";
import { directionEnum } from "../../domain/model/enums";
import { TomComplete } from "./tom-complete";
import { TomContainer } from "./tom-container";

export function LocationFinder() {
  return (
    <>
      <View style={styles.searches}>
        <TomComplete direction={directionEnum.ORIGIN} />
        <TomComplete direction={directionEnum.DESTINATION} />
      </View>
      <View style={styles.resultsContainer}>
        <TomContainer />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  searches: {
    margin: 10,
  },
  resultsContainer: {
    flex: 1,
    padding: 10,
  },
});

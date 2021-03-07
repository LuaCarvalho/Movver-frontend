/** Painel principal do app
 */
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import MapView from "react-native-maps"

const Dashboard: React.FC = () => {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text>Dashboard</Text>
      <MapView style={styles.map} region={{
        latitude: -27.210753,
        longitude: -49.644183,
        latitudeDelta: 0.0143,
        longitudeDelta: 0.0134
      }} 
      showsUserLocation
      loadingEnabled
      />
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  }
})

export default Dashboard;
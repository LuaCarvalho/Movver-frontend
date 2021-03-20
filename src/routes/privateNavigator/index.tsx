import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import MainRoutes from "./MainRoutes"
import FindDriver  from '../../components/screens/FindDriver';


const Stack = createStackNavigator();

const PrivateNavigator: React.FC = () => {
  return (
    <Stack.Navigator headerMode={"none"}>
      <Stack.Screen name="MainRoutes" component={MainRoutes} />
      <Stack.Screen name="FindDriver" component={FindDriver} />
    </Stack.Navigator>
  );
};

export default PrivateNavigator;

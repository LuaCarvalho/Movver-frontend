import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Freightage from "../../components/screens/freightage";
import FreightageFinish from "../../components/screens/freightage/freightage-finish";
import MainRoutes from "./main-routes";

const Stack = createStackNavigator();

const PrivateNavigator: React.FC = () => {
  return (
    <Stack.Navigator headerMode={"none"}>
      <Stack.Screen name="MainRoutes" component={MainRoutes} />
      <Stack.Screen name="Freightage" component={Freightage} />
      <Stack.Screen name="FreightageFinish" component={FreightageFinish} />
    </Stack.Navigator>
  );
};

export default PrivateNavigator;

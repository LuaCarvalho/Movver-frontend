import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import FindDriver from '../../components/screens/finish/find-driver';
import Finish from "../../components/screens/finish";
import MainRoutes from "./MainRoutes";




const Stack = createStackNavigator();

const PrivateNavigator: React.FC = () => {
  return (
    <Stack.Navigator headerMode={"none"}>
      <Stack.Screen name="MainRoutes" component={MainRoutes} />
      <Stack.Screen name="FindDriver" component={FindDriver} />
      <Stack.Screen name="Finish" component={Finish} />
    </Stack.Navigator>
  );
};

export default PrivateNavigator;

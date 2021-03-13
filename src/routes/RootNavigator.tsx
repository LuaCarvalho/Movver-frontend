/** Controla todas as rotas da aplicação
 */
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import PrivateNavigator from "./PrivateNavigator";
import PublicNavigator from "./PublicNavigator";

const Stack = createStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: "Movver",
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen name="PrivateNavigator" component={PrivateNavigator} />
      <Stack.Screen name="PublicNavigator" component={PublicNavigator} />
    </Stack.Navigator>
  );
}
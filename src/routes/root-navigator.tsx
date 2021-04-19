/** Controla todas as rotas da aplicação
 */
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import PrivateNavigator from "./private-navigator";
import PublicNavigator from "./public-navigator";

const Stack = createStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="PublicNavigator"
      screenOptions={{
        headerTitle:"",
        headerTitleAlign: "center",
        headerStyle: {
          height: 30,
          opacity: 0
        },
        cardStyle: {
          height: 10
        }
      }}
    >
      <Stack.Screen name="PrivateNavigator" component={PrivateNavigator} />
      <Stack.Screen name="PublicNavigator" component={PublicNavigator} />
    </Stack.Navigator>
  );
}

/** Controla todas as rotas da aplicação
 */
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import PrivateNavigator from "./privateNavigator";
import PublicNavigator from "./publicNavigator";
import { NavigationContainerRef } from "@react-navigation/core";

const Stack = createStackNavigator();

//Permite que componentes fora das rotas acessem a navegação
export const navigationRef = React.createRef<NavigationContainerRef>();

export function navigate(name: any, params?: any) {
  navigationRef.current?.navigate(name, params);
}

export default function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="PublicNavigator"
      screenOptions={{
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen name="PrivateNavigator" component={PrivateNavigator} />
      <Stack.Screen name="PublicNavigator" component={PublicNavigator} />
    </Stack.Navigator>
  );
}

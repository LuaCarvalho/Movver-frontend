/** Componente de acesso as rotas
 */
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import RootNavigator, { navigationRef } from "./routes/RootNavigator";

export default function () {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootNavigator />
    </NavigationContainer>
  );
}
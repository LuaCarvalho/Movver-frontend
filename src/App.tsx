/** Componente de acesso as rotas
 */
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import RootNavigator, { navigationRef } from "./routes/RootNavigator";
import { LocalizationProvider } from "./context/LocalizationContext";
import { TomCompleteProvider  } from "./context/TomCompleteContext";

export default function () {
  return (
    <NavigationContainer ref={navigationRef}>
      <TomCompleteProvider>
        <LocalizationProvider>
          <RootNavigator />
        </LocalizationProvider>
      </TomCompleteProvider>
    </NavigationContainer>
  );
}

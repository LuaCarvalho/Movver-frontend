/** Componente de acesso as rotas
 */
import React from "react";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./routes/RootNavigator";
import { LocalizationProvider } from "./context/LocalizationContext";
import { TomCompleteProvider } from "./context/TomCompleteContext";

export default function () {
  return (
    <NavigationContainer>
      <TomCompleteProvider>
        <LocalizationProvider>
          <SafeAreaView style={{flex: 1}}>
            <RootNavigator />
          </SafeAreaView>
        </LocalizationProvider>
      </TomCompleteProvider>
    </NavigationContainer>
  );
}

/** Componente de acesso as rotas
 */
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { SafeAreaView } from "react-native";
import { LocalizationProvider } from "./context/LocalizationContext";
import { TomCompleteProvider } from "./context/TomCompleteContext";
import RootNavigator from "./routes/root-navigator";

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

/** Componente de acesso as rotas
 */
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { LocalizationProvider } from "./context/LocalizationContext";
import { TomCompleteProvider } from "./context/TomCompleteContext";
import { Routes } from "./routes";

export default function () {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <TomCompleteProvider>
          <LocalizationProvider>
            <SafeAreaView style={{ flex: 1 }}>
              <Routes />
            </SafeAreaView>
          </LocalizationProvider>
        </TomCompleteProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

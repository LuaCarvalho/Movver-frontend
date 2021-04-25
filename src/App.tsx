/** Componente de acesso as rotas
 */
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { FreightProvider } from "./context/FreightContext";
import { LocalizationProvider } from "./context/LocalizationContext";
import { TomCompleteProvider } from "./context/TomCompleteContext";
import { Routes } from "./routes";

export default function () {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <TomCompleteProvider>
          <LocalizationProvider>
            <FreightProvider>
              <SafeAreaView style={{ flex: 1 }}>
                <Routes />
              </SafeAreaView>
            </FreightProvider>
          </LocalizationProvider>
        </TomCompleteProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

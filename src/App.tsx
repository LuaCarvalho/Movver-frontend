/** Componente de acesso as rotas
 */
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AuthProvider } from "./context/AuthContext";
import { FormProvider } from "./context/FormContext";
import { FreightProvider } from "./context/FreightContext";
import { LocalizationProvider } from "./context/LocalizationContext";
import { TomCompleteProvider } from "./context/TomCompleteContext";
import { Routes } from "./routes";

export default function () {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AuthProvider>
          <TomCompleteProvider>
            <LocalizationProvider>
              <FreightProvider>
                <FormProvider>
                  <SafeAreaView style={{ flex: 1 }}>
                    <Routes />
                  </SafeAreaView>
                </FormProvider>
              </FreightProvider>
            </LocalizationProvider>
          </TomCompleteProvider>
        </AuthProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

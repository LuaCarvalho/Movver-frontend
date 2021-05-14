/** Componente de acesso as rotas
 */
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AuthProvider } from "./context/auth-context";
import { FormProvider } from "./context/form-context";
import { FreightProvider } from "./context/freight-context";
import { LocalizationProvider } from "./context/localization-context";
import { TomCompleteProvider } from "./context/tom-complete-context";
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

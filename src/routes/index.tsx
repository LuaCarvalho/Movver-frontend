import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Login } from "../components/auth/login";
import { Register } from "../components/auth/register";
import { Freightage } from "../components/freightage";
import { LocationFinder } from "../components/location-finder";
import { useAuthContext } from "../context/auth-context";
import { MainRoutes } from "./navigators/main-routes";
import { authRoutes, mainRoutes, secondaryRoutes } from "./routes-enum";

const Stack = createStackNavigator();

export const Routes = () => {
  const { signed } = useAuthContext();

  return (
    <Stack.Navigator initialRouteName={mainRoutes.MAIN} headerMode="none">
      <Stack.Screen name={authRoutes.AUTH_LOGIN} component={Login} />
      <Stack.Screen name={authRoutes.AUTH_REGISTER} component={Register} />
      {signed && (
        <>
          <Stack.Screen name={mainRoutes.MAIN} component={MainRoutes} />
          <Stack.Screen name={secondaryRoutes.LOCATION_FINDER} component={LocationFinder} />
          <Stack.Screen name={secondaryRoutes.FREIGHTAGE} component={Freightage} />
        </>
      )}
    </Stack.Navigator>
  );
};

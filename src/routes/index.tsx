import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Login } from '../components/auth/login';
import { Register } from "../components/auth/register";
import { FreightageStart } from "../components/freightage/freightage-start";
import { Freightage } from '../components/freightage/index';
import { MainRoutes } from "./navigators/main-routes";
import { authRoutes, mainRoutes, secondaryRoutes } from "./routes-enum";

const Stack = createStackNavigator()

export const Routes = () => {
  return (
    <Stack.Navigator initialRouteName={mainRoutes.PROFILE} headerMode="none">
      <Stack.Screen name={mainRoutes.MAIN} component={MainRoutes} />
      <Stack.Screen name={secondaryRoutes.FREIGHTAGE} component={Freightage} />
      <Stack.Screen name={secondaryRoutes.FREIGHTAGE_START} component={FreightageStart} />
      <Stack.Screen name={authRoutes.AUTH_LOGIN} component={Login} />
      <Stack.Screen name={authRoutes.AUTH_REGISTER} component={Register} />
    </Stack.Navigator>
  )
}

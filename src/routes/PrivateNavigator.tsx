/** Gerencia as rotas internas da aplicação.
 * Somente acessiveis após o login do usuário
 */
import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Dashboard from "../components/screens/Home";
import Profile from "../components/screens/Profile";
import Freight from "../components/screens/Drivers";

import Icon from "react-native-vector-icons/MaterialIcons";

const Tab = createBottomTabNavigator();

const PrivateNavigator: React.FC = () => {
  return (
    <Tab.Navigator initialRouteName="Mudanças & Fretes">
      <Tab.Screen
        name="Inicio"
        component={Dashboard}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Mudanças & Fretes"
        component={Freight}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="build" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default PrivateNavigator;

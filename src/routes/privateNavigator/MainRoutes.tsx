/** Gerencia as rotas principais da aplicação.
 ** Somente acessiveis após o login do usuário */
import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../../components/screens/Home";
import Profile from "../../components/screens/Profile";
import Freight from "../../components/screens/Drivers";

import Icon from "react-native-vector-icons/MaterialIcons";

const Tab = createBottomTabNavigator();

const MainNavigator: React.FC = () => {
  return (
    <Tab.Navigator tabBarOptions={{}} initialRouteName="Inicio">
      <Tab.Screen
        name="Inicio"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="home" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Mudanças & Fretes"
        component={Freight}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="search" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="build" color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
};
export default MainNavigator;
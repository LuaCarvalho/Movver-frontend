/** Gerencia as rotas internas da aplicação. 
 * Somente acessiveis após o login do usuário
 */
import React from "react"

import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"

import Dashboard from "../components/Dashboard"
import Profile from "../components/Profile"
import Freight from "../components/Freight"

const Tab = createBottomTabNavigator()

const PrivateNavigator: React.FC = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Inicio" component={Dashboard}/>
            <Tab.Screen name="Fretes" component={Freight}/>
            <Tab.Screen name="Perfil" component={Profile}/>
        </Tab.Navigator>
    )
}
export default PrivateNavigator;
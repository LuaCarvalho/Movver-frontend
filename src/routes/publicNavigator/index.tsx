/** Rotas públicas da aplicação.
 * Podem ser acessadas antes do login ou após o logout.
 */
import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import Login from '../../components/auth/Login'
import Register from '../../components/auth/Register'


const Stack = createStackNavigator()

const PublicNavigator: React.FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    )
}

export default PublicNavigator;
import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import Formulario from '../Componentes/Formulario'
import FormularioAsignatura from '../Componentes/pantallaAsignatura'

export default function NavegacionDrawerComponents() {
    const drawer = createDrawerNavigator()

    return (
        <NavigationContainer>
            <drawer.Navigator>
                <drawer.Screen name="Alumnos" component={Formulario} />
                <drawer.Screen name="Asignaturas" component={FormularioAsignatura} />
            </drawer.Navigator>
        </NavigationContainer>
    )
}
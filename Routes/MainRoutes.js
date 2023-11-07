import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Components/Home';
import BottomNavigation from '../Components/BottomNavigation';

const Stack = createNativeStackNavigator();


export default function MainRoutes() {
  return (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerShown:false
            }}
        >
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='Bottomnavigation' component={BottomNavigation}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}
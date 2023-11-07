import { View, Text, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Comingsoon from './Comingsoon';
import Profile from './Profile';
const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
    return (
        <Tab.Navigator
            initialRouteName='Profile'
            screenOptions={{
                headerShown:false
            }}
        >
            <Tab.Screen name="Home"
                component={Comingsoon}
                options={{
                    tabBarIcon: () => {
                        return (
                            <Image source={require('../Assets/home.png')} style={{ resizeMode: 'contain', width: 30, height: 30 }} />
                        )
                    }
                }}
            />

            <Tab.Screen name="Leagues"
                component={Comingsoon}
                options={{
                    tabBarIcon: () => {
                        return (
                            <Image source={require('../Assets/trophy.png')} style={{ resizeMode: 'contain', width: 30, height: 30 }} />
                        )
                    }
                }}
            />

            <Tab.Screen name="Research"
                component={Comingsoon}
                options={{
                    tabBarIcon: () => {
                        return (
                            <Image source={require('../Assets/search.png')} style={{ resizeMode: 'contain', width: 30, height: 30 }} />
                        )
                    }
                }}
            />

            <Tab.Screen name="Leaderboard"
                component={Comingsoon}
                options={{
                    tabBarIcon: () => {
                        return (
                            <Image source={require('../Assets/leading.png')} style={{ resizeMode: 'contain', width: 30, height: 30 }} />
                        )
                    }
                }}
            />

            <Tab.Screen name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: () => {
                        return (
                            <Image source={require('../Assets/user.png')} style={{ resizeMode: 'contain', width: 20, height: 20 }} />
                        )
                    }
                }}
            />

        </Tab.Navigator>
    )
}
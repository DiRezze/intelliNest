import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import Home from "../(tabs)/homeTab";
import LandingTab from '../(tabs)/landingTab';
import DebugTab from '../(tabs)/debugTab';

const Tab = createBottomTabNavigator();

export default function TabRoutes(){
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarInactiveTintColor: 'gray',
                tabBarActiveTintColor: '#2266ff',
            }}
        >
            <Tab.Screen
                name="Início"
                component={Home}
                options={{
                    tabBarIcon: ({color, size}) => <Feather name="home" color={color} size={size} />,
                    tabBarLabel: "Início",
                }}
            />
            <Tab.Screen
                name="Debug"
                component={DebugTab}
                options={{
                    tabBarIcon: ({color, size}) => <Feather name="terminal" color={color} size={size} />,
                    tabBarLabel: "Depuração"
                }}
            />
        </Tab.Navigator>
    )
}

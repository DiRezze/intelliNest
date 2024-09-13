import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import Hardware from '../(tabs)/hardwareTab';
import DebugTab from '../(tabs)/debugTab';
import Home from "../(tabs)/homeTab";
import * as React from 'react';
import ProfileTab from '../(tabs)/profileTab';
import HardwareStack from './stacks/hardwareStack';

const Tab = createBottomTabNavigator();

export default function TabRoutes(){
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarInactiveTintColor: 'gray',
                tabBarActiveTintColor: '#2266ff',
            }}
            initialRouteName='Home'
        >
            <Tab.Screen
                name="Debug"
                component={DebugTab}
                options={{
                    tabBarIcon: ({color, size}) => <Feather name="terminal" color={color} size={size} />,
                    tabBarLabel: "Depuração",
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="HardwareStack"
                component={HardwareStack}
                options={{
                    tabBarIcon: ({color, size}) => <Feather name="cpu" color={color} size={size} />,
                    tabBarLabel: "Hardware",
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({color, size}) => <Feather name="home" color={color} size={size} />,
                    tabBarLabel: "Início",
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="Perfil"
                component={ProfileTab}
                options={{
                    tabBarIcon: ({color, size}) => <Feather name="user" color={color} size={size} />,
                    tabBarLabel: "Perfil",
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="Config"
                component={DebugTab}
                options={{
                    tabBarIcon: ({color, size}) => <Feather name="settings" color={color} size={size} />,
                    tabBarLabel: "Config.",
                    headerShown: false
                }}
            />
        </Tab.Navigator>
    )
}

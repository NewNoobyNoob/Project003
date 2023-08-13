import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ScreenOne from './screens/ScreenOne';
import ScreenTwo from './screens/ScreenTwo';
import TabScreenTwo from './screens/TabScreenTwo';
import DrawerScreenTwo from './screens/DrawerScreenTwo';

import Ionicons from '@expo/vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
            name='ScreenOne' 
            component={ScreenOne} 
            options={{headerShown: false}} 
            />
            <Stack.Screen 
            name='ScreenTwo' 
            component={ScreenTwo} 
            options={{ headerTitle: "Skillwill Rules", headerTitleAlign: 'center'}} 
            />
        </Stack.Navigator>
    );
};

const TabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={({route}) => ({
            headerShown: false,
            tabBarIcon: ({focused, color, size}) => {
                let iconName;

                if(route.name === 'TabOne') {
                    iconName = focused ? 'ios-information-circle'
                    : 'ios-information-circle-outline';
                } else if(route.name === 'TabTwo') {
                    iconName = focused ? 'ios-list' : 'ios-list-outline';
                }

                return <Ionicons name={iconName} color={color} size={size} />
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
            })}>
            <Tab.Screen name='TabOne' component={StackNavigator} />
            <Tab.Screen name='TabTwo' component={TabScreenTwo} />
        </Tab.Navigator>
    )
};

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator >
            <Drawer.Screen name='DrawerOne' component={TabNavigator} />
            <Drawer.Screen name='DrawerTwo' component={DrawerScreenTwo} />

        </ Drawer.Navigator>
    )
};

export default DrawerNavigator;

// const styles = StyleSheet.create({})
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../screens/Profile';
import Search from '../screens/Search';
import Setting from '../screens/Setting';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/HomeScreen';
import HomeStack from './stacks/HomeStack';
import ProfileStack from './stacks/ProfileStack';

const Tabs = () => {

    const Tab = createBottomTabNavigator();

    return (

        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false
                }}
                >
                <Tab.Screen name="Home" component={HomeStack} />
                <Tab.Screen name="Profile" component={ProfileStack} />
                <Tab.Screen name="Search" component={Search} />
                <Tab.Screen name="Setting" component={Setting} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({})

export default Tabs;

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './stacks/HomeStack';
import ProfileStack from './stacks/ProfileStack';
import Search from '../screens/SearchScreen';
import Setting from '../screens/Setting';

const Tabs = () => {

    const Tab = createBottomTabNavigator();

    return (

        <NavigationContainer>
            <Tab.Navigator screenOptions={{ headerShown: false }}>
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

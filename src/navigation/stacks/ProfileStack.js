import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Profile from '../../screens/Profile';

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
    return (
        <Stack.Navigator initialRouteName='Profile'>
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({})

export default ProfileStack;



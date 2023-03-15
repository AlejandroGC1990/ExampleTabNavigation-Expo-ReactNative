import React from 'react';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen';
import AlbumScreen from '../../screens/AlbumScreen';


const Stack = createNativeStackNavigator();


const HomeStack = () => {
    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Album" component={AlbumScreen} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({})

export default HomeStack;

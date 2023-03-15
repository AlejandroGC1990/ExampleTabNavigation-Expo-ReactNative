import React from 'react';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen';
import HomeAlbumScreen from '../../screens/HomeAlbumScreen';
import ProfileAlbumScreen from '../../screens/ProfileAlbumScreen';
import SearchAlbumScreen from '../../screens/SearchAlbumScreen';
import SettingAlbumScreen from '../../screens/SettingAlbumScreen';

const Stack = createNativeStackNavigator();

const HomeStack = () => {

    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="HomeAlbum" component={HomeAlbumScreen} />
            <Stack.Screen name="ProfileAlbum" component={ProfileAlbumScreen} />
            <Stack.Screen name="SearchAlbum" component={SearchAlbumScreen} />
            <Stack.Screen name="SettingAlbum" component={SettingAlbumScreen} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({})

export default HomeStack;

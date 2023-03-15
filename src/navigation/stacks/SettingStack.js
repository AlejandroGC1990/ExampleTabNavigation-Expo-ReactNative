import React from 'react';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SettingScreen from '../../screens/SettingScreen';
import SettingAlbumScreen from '../../screens/SettingAlbumScreen';

const Stack = createNativeStackNavigator();

const SettingStack = () => {

    return (
        <Stack.Navigator initialRouteName='Setting'>
            <Stack.Screen name="Setting" component={SettingScreen} />
            <Stack.Screen name="SettingAlbum" component={SettingAlbumScreen} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({})

export default SettingStack;

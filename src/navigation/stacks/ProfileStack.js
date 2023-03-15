import React from 'react';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../../screens/ProfileScreen';
import ProfileAlbumScreen from '../../screens/ProfileAlbumScreen';

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
    
    return (
        <Stack.Navigator initialRouteName='Profile'>
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="ProfileAlbum" component={ProfileAlbumScreen} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({})

export default ProfileStack;



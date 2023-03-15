import React from 'react';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from '../../screens/SearchScreen';
import SearchAlbumScreen from '../../screens/SearchAlbumScreen';

const Stack = createNativeStackNavigator();

const SearchStack = () => {

    return (
        <Stack.Navigator initialRouteName='Search'>
            <Stack.Screen name="Search" component={SearchScreen} />
            <Stack.Screen name="SearchAlbum" component={SearchAlbumScreen} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({})

export default SearchStack;

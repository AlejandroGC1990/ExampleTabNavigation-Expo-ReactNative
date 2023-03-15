import React from 'react';
import { Button, View, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Home from './HomeScreen';

const Search = () => {

    const navigation = useNavigation();

    return (
        <View>
            <Text>Search</Text>
            <Button title="Go to home" onPress={() => navigation.navigate(Home)} />
        </View>
    );
}

const styles = StyleSheet.create({})

export default Search;

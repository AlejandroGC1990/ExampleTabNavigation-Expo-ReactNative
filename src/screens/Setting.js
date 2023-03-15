import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Home from './HomeScreen';

const Setting = () => {

    const navigation = useNavigation();

    return (
        <View>
            <Text>Setting</Text>
            <Button title="Go to home" onPress={() => navigation.navigate(Home)} />
        </View>
    );
}

const styles = StyleSheet.create({})

export default Setting;

import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Home from './HomeScreen';

const Profile = () => {

    const navigation = useNavigation();

    return (
        <View>
            <Text>Profile</Text>
            <Button title="Go to home" onPress={() => navigation.navigate(Home)} />
        </View>
    );
}

const styles = StyleSheet.create({})

export default Profile;

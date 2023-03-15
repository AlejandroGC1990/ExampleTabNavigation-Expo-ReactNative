import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = ({ route, navigation }) => {


    return (
        <View style={{ flex: 1 }}>
            <Text>Home Screen</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Album")}>
                <Text>Navigate to album</Text>
            </TouchableOpacity>
            <Text>{`Cosas del album: ${route.params?.cosas ?? "Aun nada"}`}</Text>
        </View>
    )
}
const styles = StyleSheet.create({})

export default HomeScreen;

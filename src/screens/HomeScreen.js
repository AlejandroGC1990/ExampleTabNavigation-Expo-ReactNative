import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = ({ route, navigation }) => {

    return (
        <View style={{ flex: 1 }}>
            <Text>Home Screen</Text>
            <TouchableOpacity onPress={() => navigation.navigate("HomeAlbum")}>
                <Text>Navigate to HomeAlbum</Text>
            </TouchableOpacity>
            <Text>{`Cosas del album: ${route.params?.cosas ?? "Aún nada"}`}</Text>
        </View>
    )
}
const styles = StyleSheet.create({})

export default HomeScreen;

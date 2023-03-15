import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const SettingScreen = ({ route, navigation }) => {

    return (
        <View style={{ flex: 1 }}>
            <Text>Setting Screen</Text>
            <TouchableOpacity onPress={() => navigation.navigate("SettingAlbum")}>
                <Text>Navigate to SettingAlbum</Text>
            </TouchableOpacity>
            <Text>{`Cosas del album: ${route.params?.cosas ?? "Aún nada"}`}</Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default SettingScreen;

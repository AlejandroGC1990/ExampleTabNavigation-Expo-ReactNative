import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ProfileScreen = ({ route, navigation }) => {

    return (
        <View style={{ flex: 1 }}>
            <Text>Profile Screen</Text>
            <TouchableOpacity onPress={() => navigation.navigate("ProfileAlbum")}>
                <Text>Navigate to ProfileAlbum</Text>
            </TouchableOpacity>
            <Text>{`Cosas del album: ${route.params?.cosas ?? "Aún nada"}`}</Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default ProfileScreen;

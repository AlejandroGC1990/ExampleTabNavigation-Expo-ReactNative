import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SearchScreen = ({ route, navigation }) => {

    return (
        <View style={{ flex: 1 }}>
            <Text>Search Screen</Text>
            <TouchableOpacity onPress={() => navigation.navigate("SearchAlbum")}>
                <Text>Navigate to SearchAlbum</Text>
            </TouchableOpacity>
            <Text>{`Cosas del album: ${route.params?.cosas ?? "Aún nada"}`}</Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default SearchScreen;

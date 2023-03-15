import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = ({ route, navigation }) => {
console.log(navigation)
    return (
        <View style={{ flex: 1 }}>
            <Text>Home Screen</Text>
            <TouchableOpacity onPress={() => navigation.navigate("HomeAlbum")}>
                <Text>Navigate to HomeAlbum</Text>
            </TouchableOpacity>
            <Text>{`Cosas del album: ${route.params?.cosas ?? "Aún nada"}`}</Text>
            <TouchableOpacity 
                onPress={() => navigation.navigate('Profile', { screen: 'ProfileAlbum' })}
            >
                <Text>Navigate to Profile Album</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={() => navigation.navigate('Search', { screen: 'SearchAlbum' })}
            >
                <Text>Navigate to Search Album</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={() => navigation.navigate('Setting', { screen: 'SettingAlbum' })}
            >
                <Text>Navigate to Setting Album</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({})

export default HomeScreen;

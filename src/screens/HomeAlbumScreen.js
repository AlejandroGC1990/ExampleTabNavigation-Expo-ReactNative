import React from 'react'
import { View, TouchableOpacity, Text } from "react-native";

const HomeAlbumScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <Text>Home Albums Screen</Text>
            <TouchableOpacity 
                onPress={() => navigation.navigate("Home", { cosas: "cosas desde Home Album" })}
            >
                <Text>Navigate to home</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeAlbumScreen;
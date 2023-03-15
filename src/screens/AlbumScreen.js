import React from 'react'
import {View, TouchableOpacity, Text } from "react-native"

const AlbumScreen = ({ route, navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <Text>Albums Screen</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Home", { cosas: "cosas desde album" })}>
                <Text>Navigate to home</Text></TouchableOpacity>
        </View>
    )
}


export default AlbumScreen
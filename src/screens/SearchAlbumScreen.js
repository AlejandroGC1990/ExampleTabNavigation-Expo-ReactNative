import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

const SearchAlbumScreen = ({ navigation }) => {
    return (
        <View stle={{ flex: 1 }}>
            <Text>Search Albums screens</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("Search", { cosas: "Aún más cosas desde Search Album" })}
            >
                <Text>Navigate to Search</Text>
            </TouchableOpacity>
        </View>
    );
}

export default SearchAlbumScreen;
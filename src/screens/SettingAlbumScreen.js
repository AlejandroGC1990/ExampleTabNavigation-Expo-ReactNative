import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const SettingAlbumScreen = ({ navigation }) => {

    return (
        <View style={{ flex: 1 }}>
            <Text>Setting Album Screen</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("Setting", { cosas: "Las últimas cosas desde Setting Album" })}
            >
                <Text>Navigate to Setting</Text>
            </TouchableOpacity>
        </View>
    );
}

export default SettingAlbumScreen;
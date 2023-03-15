import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

const ProfileAlbumScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <Text>Profile Album Screen</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("Profile", { cosas: "cosas de AlbumProfile" })}
            >
                <Text>Navigate to Profile</Text>
            </TouchableOpacity>
        </View>
    );
}


export default ProfileAlbumScreen;

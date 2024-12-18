import { useEffect, useState } from "react";
import { Button, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Screen from "./screens/Screen";

export default function App() {
    const [imageUri, setImageUri] = useState();

    const requestPermission = async () => {
        const { granted } = await ImagePicker.requestCameraPermissionsAsync();

        if (!granted) alert("You need to enable permission to access the library");
    };

    useEffect(() => {
        requestPermission();
    }, []);

    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 1,
            });
            if (!result.canceled && result.assets && result.assets.length > 0) {
                setImageUri(result.assets[0].uri);
            }
        } catch (error) {
            console.log("Error reading an image", error);
        }
    };

    return (
        <Screen>
            <Button title="Select Image" onPress={selectImage} />
            {imageUri && (
                <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
            )}
        </Screen>
    );
}

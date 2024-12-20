import { useEffect, useState } from "react";
import { Button, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Screen from "./screens/Screen";
import ImageInput from "../Components/ImageInput";

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
           
            <ImageInput imageUri={imageUri} onChangeImage={uri => setImageUri(uri)}/>
        </Screen>
    );
}

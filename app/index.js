
import { useEffect } from "react";
import * as ImagePicker from "expo-image-picker"
import ListEditScreen from "./screens/ListEditScreen";


export default function App() {
    const requestPermission = async () => {
        const {granted} = await ImagePicker.requestCameraPermissionsAsync();

        if(!granted) alert('You need to enable permission to access the library');
    }
    useEffect(() => {
        requestPermission();
    },[])
    
}
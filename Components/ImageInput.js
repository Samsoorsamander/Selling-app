import * as ImagePicker from "expo-image-picker";
import { useEffect } from "react";
import { View, StyleSheet, Image, Alert, TouchableWithoutFeedback } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import colors from '../config/colors';
 

function ImageInput({imageUri, onChangeImage}) {

    useEffect(() => {
        requestPermission();
    }, []);
    
    const requestPermission = async () => {
        const { granted } = await ImagePicker.requestCameraPermissionsAsync();

        if (!granted) alert("You need to enable permission to access the library");
    };


    const handlePress = () => {
        if(!imageUri) selecteImage();
        else
        Alert.alert("Delete", "Are you sure you want to delete this image", [
            {text:"Delete", onPress:() => onChangeImage(null)},
            {text:"No"}
        ])
        
    }

    const selecteImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality:0.5,
            });
            if(!result.canceled && result.assets && result.assets.length > 0)
            onChangeImage(result.assets[0].uri)
            
        } catch (error) {
            console.log("Error ",error)
        }
    }
return (
    <TouchableWithoutFeedback onPress={handlePress}>
    <View style={Styles.container}>
     {!imageUri && (
        <MaterialCommunityIcons name='camera' size={40} color={colors.medium}/>
     )}
     {imageUri && <Image source={{uri:imageUri}} style={Styles.image}/>}   
    </View>
    </TouchableWithoutFeedback>
)
}

const Styles = StyleSheet.create({
container: {
    width: 100,
    height: 100,
    borderRadius:15,
    backgroundColor:colors.light,
    overflow:"hidden",
    alignItems:'center',
    justifyContent:"center"
},
image:{
    width:"100%",
    height:"100%"
}
})
export default ImageInput;
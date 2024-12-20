import React from 'react';
import { View, StyleSheet } from 'react-native';
import ImageInput from './ImageInput';

function ImageInputList({imageUris=[], onAddImage, onRemoveImage}) {
return (
<View style={Styles.container}>
   {
    imageUris.map((uri) => (
        <View key={uri} style={Styles.image}>
        <ImageInput
        imageUri={uri} 
        
        onChangeImage={() => onRemoveImage(uri)}/>
        </View>
       ))
   }
   <ImageInput onChangeImage={uri => onAddImage(uri)}/>
   
</View>
)
}

const Styles = StyleSheet.create({
container: {
 flexDirection:"row",
},
image: {
    marginRight: 10
}
})
export default ImageInputList;
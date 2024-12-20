import React, { useRef } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ImageInput from './ImageInput';

function ImageInputList({imageUris=[], onAddImage, onRemoveImage}) {
    const scrollView = useRef();
return (
    <View>
        <ScrollView 
        ref={scrollView} 
        horizontal 
        onContentSizeChange={() => scrollView.current.scrollToEnd()}>
            
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
        </ScrollView>
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
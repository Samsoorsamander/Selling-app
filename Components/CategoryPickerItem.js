import * as React from "react"
import { View, StyleSheet } from "react-native"
import Icons from "./Icons"
import AppText from "./AppText"
export default function CategoryPickerItem({item, onPress}) {
    return (
        <View style={Styles.container}>
            <Icons 
            name={item.Icons} 
            backgroundColor={item.backgroundColor}
            size={80}
            />
            <AppText style={Styles.label}>{item.label}</AppText>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical:15,
        alignItems:"center",
        width:"33%"
    },
    label: {
        marginTop:5,
        textAlign:"center"
    }
})
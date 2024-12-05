import {  Text, StyleSheet, Platform } from "react-native";

export default function AppText({children, style}) {
    return(
        <Text style ={[styles.text, style]}>{children}</Text>
    )
}

const styles =StyleSheet.create({
    text: {
        fontSize: 20,
        fontFamily: Platform.OS ==="android" ? "Roboto" :"Avenir"
    }
})
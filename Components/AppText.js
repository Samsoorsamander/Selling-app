import {  Text, StyleSheet, Platform } from "react-native";
import colors from "../config/colors";

export default function AppText({children, style}) {
    return(
        <Text style ={[styles.text, style]}>{children}</Text>
    )
}

const styles =StyleSheet.create({
    text: {
        color:colors.dark,
        fontSize: 20,
        fontFamily: Platform.OS ==="android" ? "Roboto" :"Avenir"
    }
})
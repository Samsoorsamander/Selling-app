import {  Text, StyleSheet, Platform } from "react-native";
import colors from "../config/colors";
import defaultStyles from "../config/styles";
export default function AppText({children, style}) {
    return(
        <Text style ={[defaultStyles.text, style]}>{children}</Text>
    )
}


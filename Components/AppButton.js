import { TouchableOpacity, Text, StyleSheet } from "react-native"
import color from "../config/color"

export default function AppButton({title, onPress}) {
    return (
        <TouchableOpacity style ={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: "100%",
        backgroundColor: color.primary,
        borderRadius: 25,
        alignItems:"center",
        justifyContent: "center",
        padding: 15,
    
    },
    text: {
        fontSize: 18,
        color:color.white,
        textTransform: "uppercase",
        fontWeight:"bold"
    } 

})
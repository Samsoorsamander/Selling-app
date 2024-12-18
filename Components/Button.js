import { TouchableOpacity, Text, StyleSheet } from "react-native"
import colors from "../config/colors"

export default function Button({title, onPress, color="primary"}) {
    return (
        <TouchableOpacity style ={[styles.button, {backgroundColor: colors[color] }]} onPress={onPress} >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: "100%",
        backgroundColor: colors.primary,
        borderRadius: 25,
        alignItems:"center",
        justifyContent: "center",
        padding: 15,
        marginVertical: 10,
    
    },
    text: {
        fontSize: 18,
        color:colors.white,
        textTransform: "uppercase",
        fontWeight:"bold"
    } 

})
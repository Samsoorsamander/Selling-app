import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { View, StyleSheet, TextInput, Platform } from "react-native";
import colors from "../config/colors";

export default function AppTextInput({icon, ...otherProps}) {
    return (
        <View style={styles.container}>
           { icon && <MaterialCommunityIcons name={icon} size={20} color={colors.medium} style={styles.icon}/> }
            <TextInput style={styles.textInput} {...otherProps} />
        </View>
    )
}

const styles =StyleSheet.create({
    container: {
        backgroundColor:colors.light,
        borderRadius: 25,
        width:"100%",
        flexDirection: 'row',
        padding: 15,
        marginVertical: 10,
        alignItems: 'center'
 
    },
    textInput: {
        fontSize: 18,
        fontFamily:Platform.OS ==="android" ? "Roboto" :"Avenir"

    },
    icon: {
        marginRight: 10,

    }
})
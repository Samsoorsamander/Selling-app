import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { View, StyleSheet, TextInput } from "react-native";
import defaultStyles from"../config/styles"
import colors from "../config/colors";
export default function AppTextInput({icon, ...otherProps}) {
    return (
        <View style={styles.container}>
           { icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.medium} style={styles.icon}/> }
            <TextInput 
            placeholderTextColor={defaultStyles.colors.medium}
            style={defaultStyles.text} 
            {...otherProps} />
        </View>
    )
}

const styles =StyleSheet.create({
    container: {
        backgroundColor:defaultStyles.colors.light,
        borderRadius: 25,
        width:"100%",
        flexDirection: 'row',
        padding: 15,
        marginVertical: 10,
        alignItems: 'center'
 
    },
    
    icon: {
        marginRight: 10,

    }
})
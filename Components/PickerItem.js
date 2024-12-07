import { TouchableOpacity, StyleSheet } from "react-native";
import AppText from "./AppText";
import styles from "../config/styles";


export default function PickerItem({label, onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
        <AppText style={Styles.text}>{label}</AppText>

        </TouchableOpacity>
        )
}

const Styles =StyleSheet.create({
    text: {
        padding: 20
    }
})
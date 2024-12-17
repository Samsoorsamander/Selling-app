import { TouchableOpacity, StyleSheet } from "react-native";
import AppText from "./AppText";


export default function PickerItem({item, onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
        <AppText style={Styles.text}>{item.label}</AppText>

        </TouchableOpacity>
        )
}

const Styles =StyleSheet.create({
    text: {
        padding: 20
    }
})
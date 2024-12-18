import { TouchableOpacity, StyleSheet } from "react-native";
import Text from "./Text";


export default function PickerItem({item, onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
        <Text style={Styles.text}>{item.label}</Text>

        </TouchableOpacity>
        )
}

const Styles =StyleSheet.create({
    text: {
        padding: 20
    }
})
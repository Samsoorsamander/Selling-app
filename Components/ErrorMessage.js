import { StyleSheet } from "react-native";
import AppText from "./AppText";


export default function ErrorMessage({error}) {
    return (
        <AppText style={Styles.text}>{error}</AppText>
    )
}

const Styles = StyleSheet.create({
    text: {color:"red"}
})
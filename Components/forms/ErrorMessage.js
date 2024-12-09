import { StyleSheet } from "react-native";
import AppText from "../AppText";


export default function ErrorMessage({error, visible}) {
    if(!visible || !error ) return null;
    return <AppText style={Styles.text}>{error}</AppText>
}

const Styles = StyleSheet.create({
    text: {color:"red"}
})
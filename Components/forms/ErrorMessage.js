import { StyleSheet } from "react-native";
import Text from "../Text";


export default function ErrorMessage({error, visible}) {
    if(!visible || !error ) return null;
    return <Text style={Styles.text}>{error}</Text>
}

const Styles = StyleSheet.create({
    text: {color:"red"}
})
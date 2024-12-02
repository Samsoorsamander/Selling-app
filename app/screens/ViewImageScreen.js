import { View,  StyleSheet, Image } from "react-native"
import colors from "../../config/colors"

export default function ViewImageScreen() {
    return (
        <View style ={styles.container}>
            <View style = {styles.closeIcon}></View>
            <View style = {styles.deleteIcon}></View>
            <Image 
            style ={styles.imageStyle}
            resizeMode="contain"
            source={require("../assets/img4.jpeg")}
            />
        </View>
    )
}
    
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,

    },
    closeIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.primary,
        position:"absolute",
        top: 40,
        left: 30 
    },
    imageStyle: {
        width: "100%",
        height: "100%",
    },
    deleteIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.secondary,
        position:"absolute",
        top: 40,
        right: 30
    },
})
import { View,  StyleSheet, Image, useWindowDimensions } from "react-native"
import colors from "../../config/colors"
import AntDesign from "@expo/vector-icons/AntDesign"
export default function ViewImageScreen() {
    return (
        <View style ={styles.container}>
            <View style = {styles.closeIcon}>
                <AntDesign name="close" color={colors.white} size={30}/>
            </View>
            <View style = {styles.deleteIcon}>
            <AntDesign name="delete" color={colors.white} size={30}/>
            </View>
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
        position:"absolute",
        top: 40,
        left: 30 
    },
    imageStyle: {
        width: "100%",
        height: "100%",
    },
    deleteIcon: {
        position:"absolute",
        top: 40,
        right: 30
    },
})
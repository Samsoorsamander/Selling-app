import { Platform, SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import colors from "../../config/colors";

export default function Screen({children, style}) {
    return (
        
    <SafeAreaView style= {[styles.screen, style]}>
        <View style={style}>
    {children}

        </View>
</SafeAreaView>

    )    
}

const styles = StyleSheet.create({
    screen: {
        padding:20,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flex: 1,
        backgroundColor:colors.light,
    }
})
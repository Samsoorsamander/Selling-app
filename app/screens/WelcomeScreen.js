import { View, Text, StyleSheet,ImageBackground, Image } from "react-native"
import AppButton from "../../Components/AppButton"

export default function WelcemeScreen() {
    return (
        <ImageBackground
        style={styles.background}
        source={require("../assets/img2.jpeg")}
        >
            <View style= {styles.logoContainer}>
            <Image source={require("../assets/logo.png")}
            style = {styles.logo}
            />
                <Text style ={styles.logoText}>Sell What you don't need</Text>
            </View>
            < AppButton title="login" onPress={console.log("Tapped")}/>
            <View style ={styles.registerButton}></View>

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: 'center'
    },
    
    logoContainer: {
        flex: 1,
        position: "absolute",
        top: 70,
        alignItems: "center",
    },
    logo:{
        width: 100,
        height: 100,
    },
    logoText:{
        color: 'blck'
    },
    registerButton: {
        width:"100%",
        height: 70,
        backgroundColor: "#4ecdc4"
    },
})

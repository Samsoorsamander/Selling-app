import { View, Text, StyleSheet,ImageBackground, Image } from "react-native"
import AppButton from "../../Components/AppButton"

export default function WelcemeScreen() {
    return (
        <ImageBackground
        blurRadius={5}
        style={styles.background}
        source={require("../assets/img2.jpeg")}
        >
            <View style= {styles.logoContainer}>
            <Image source={require("../assets/logo.png")}
            style = {styles.logo}
            />
                <Text style ={styles.tagline}>Sell What you don't need</Text>
            </View>
            <View style={styles.buttonContainer}>
            < AppButton title="login" />
            <AppButton title="Register" color="secondary"/>
            </View>

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
    
    registerButton: {
        width:"100%",
        height: 70,
        backgroundColor: "#4ecdc4"
    },
    buttonContainer: {
        padding: 20,
        width: "100%"
    },
    tagline: {
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 20,
    }
})

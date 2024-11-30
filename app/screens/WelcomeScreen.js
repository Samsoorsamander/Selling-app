import { View, Text, StyleSheet,ImageBackground, Image } from "react-native"

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
            <View style ={styles.loginButton}></View>
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
    loginButton: {
        width:"100%",
        height: 70,
        backgroundColor: "#fc5c65"
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

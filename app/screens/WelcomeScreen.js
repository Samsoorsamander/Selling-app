import { View, Text, StyleSheet,ImageBackground, Image } from "react-native"

export default function WelcemeScreen() {
    return (
        <ImageBackground
        style={styles.background}
        source={require("../assets/img1.jpg")}
        >
            <View style= {styles.container}>
            <Image source={require("../assets/logo.png")}
            style = {styles.logo}
            />
                <Text>Sell What you don't need</Text>
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
    container: {
        flex: 1,
        position: "absolute",
        top: 50,
        alignItems: "center",
        color:"black"
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
})

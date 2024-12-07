import { Image, StyleSheet } from "react-native";
import Screen from "./Screen";
import {Formik} from "formik"
import AppTextInput from "../../Components/AppTextInput";
import { useState } from "react";
import AppButton from "../../Components/AppButton";


export default function LoginScreen() {
    return (
        <Screen style={Styles.container}>
        <Image style={Styles.logo}  source={require("../assets/logo.png")}/>
        <Formik
        initialValues={{email: "", password:""}}
        onSubmit={values => console.log(values)}
        >
            {({handleChange,handleSubmit}) => (
                <>
                <AppTextInput 
        autoCapitalize="none"
        autoCorrect ={false}
        keyboardType="email-address"
        onChangeText={handleChange("email")}
        icon="email"
        placeholder="Email"
        textContentType="emailAdress"
        />
        <AppTextInput 
        autoCapitalize="none"
        autoCorrect ={false}
        icon="lock"
        onChangeText={handleChange("password")}
        placeholder="Password"
        secureTextEntry
        textContentType="Password"
        />
        <AppButton title="Login"  onPress={handleSubmit}/>

                </>
            )}
        </Formik>
        
                </Screen>
    )
}

const Styles =StyleSheet.create({
    container: {
        padding: 10,
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20,
    }
})
import { Image, StyleSheet } from "react-native";
import {Formik} from "formik";
import * as Yup from "yup";
import Screen from "./Screen";
import AppTextInput from "../../Components/AppTextInput";
import AppButton from "../../Components/AppButton";
import AppText from "../../Components/AppText";


const validationSchema = Yup.object().shape({
    email:Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})

export default function LoginScreen() {
    return (
        <Screen style={Styles.container}>
        <Image style={Styles.logo}  source={require("../assets/logo.png")}/>
        <Formik
        initialValues={{email: "", password:""}}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
        >
            {({handleChange,handleSubmit, errors}) => (
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
        <AppText style={{color:"red"}}>{errors.email}</AppText>
        <AppTextInput 
        autoCapitalize="none"
        autoCorrect ={false}
        icon="lock"
        onChangeText={handleChange("password")}
        placeholder="Password"
        secureTextEntry
        textContentType="Password"
        />
        <AppText style={{color:"red"}}>{errors.password}</AppText>
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
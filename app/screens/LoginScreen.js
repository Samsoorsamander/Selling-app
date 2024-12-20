import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";
import Screen from "./Screen";
import { Form,  FormField, SubmitButton} from "../../Components/forms"
const validationSchema = Yup.object().shape({
    email:Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})

export default function LoginScreen() {
    return (
        <Screen style={Styles.container}>
        <Image style={Styles.logo}  source={require("../assets/logo.png")}/>
        <Form
        initialValues={{email: "", password:""}}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
        >
         <FormField 
        autoCapitalize="none"
        autoCorrect ={false}
        keyboardType="email-address"
        icon="email"
        name="email"
        placeholder="Email"
        textContentType="emailAdress"
        />
        <FormField 
        autoCapitalize="none"
        autoCorrect ={false}
        icon="lock"
        name="password"
        placeholder="Password"
        secureTextEntry
        textContentType="Password"
        />
            <SubmitButton title="loging"/>
         
        </Form>
        
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
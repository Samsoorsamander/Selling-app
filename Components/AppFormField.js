import AppTextInput from "./AppTextInput";
import { useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage";


export default function AppFormField({name,  ...otherProps}) {
    const {handleChange,setFieldTouched, errors, touched} = useFormikContext()
    return(
        <>
         <AppTextInput 
        // autoCapitalize="none"
        // autoCorrect ={false}
        // keyboardType="email-address"
        onChangeText={handleChange(name)}
        onBlur ={() => setFieldTouched(name)}
        {...otherProps}
        // icon="email"
        // placeholder="Email"
        // textContentType="emailAdress"
        />
        <ErrorMessage error={errors[name]} visible={touched[name]}/>
        </>
    )
}
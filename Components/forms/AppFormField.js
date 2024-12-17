import AppTextInput from "../AppTextInput";
import { useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage";


export default function AppFormField({name,  ...otherProps}) {
    const {handleChange,setFieldTouched, errors, touched} = useFormikContext()
    return(
        <>
         <AppTextInput 
        onChangeText={handleChange(name)}
        onBlur ={() => setFieldTouched(name)}
        {...otherProps}
        />
        <ErrorMessage error={errors[name]} visible={touched[name]}/>
        </>
    )
}
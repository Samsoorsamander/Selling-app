import TextInput from "../TextInput";
import { useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage";


export default function FormField({name, width,  ...otherProps}) {
    const {handleChange,setFieldTouched, errors, touched} = useFormikContext()
    return(
        <>
         <TextInput 
        onChangeText={handleChange(name)}
        onBlur ={() => setFieldTouched(name)}
        width={width}
        {...otherProps}
        />
        <ErrorMessage error={errors[name]} visible={touched[name]}/>
        </>
    )
}
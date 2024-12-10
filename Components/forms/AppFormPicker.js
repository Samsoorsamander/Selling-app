import React from "react";
import { useFormikContext } from "formik";

import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";

export default function AppFormPicker({item, name,placeholder}) {
    const {errors, setFieldValue, touched, values} = useFormikContext();
    return (
        <>
        <AppPicker 
        item={item}
        onSelectItem={item => setFieldValue( name,item)}
        placeholder={placeholder}
        selectedItem={values[name]}
        />
        <ErrorMessage error={errors[name]} visible={touched[nmae]}/>
        </>
    )
}
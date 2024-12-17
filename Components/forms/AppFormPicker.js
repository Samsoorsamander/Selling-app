import React from "react";
import { useFormikContext } from "formik";

import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";

export default function AppFormPicker({item, name,placeholder,width, PickerItemComponent,numberOfColumns}) {
    const {errors, setFieldValue, touched, values} = useFormikContext();
    return (
        <>
        <AppPicker 
        item={item}
        onSelectItem={item => setFieldValue( name,item)}
        placeholder={placeholder}
        numberOfColumns={numberOfColumns}
        PickerItemComponent={PickerItemComponent}
        selectedItem={values[name]}
        width={width}
        />
        <ErrorMessage error={errors[name]} visible={touched[name]}/>
        </>
    )
}
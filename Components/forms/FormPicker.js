import React from "react";
import { useFormikContext } from "formik";

import Picker from "../Picker";
import ErrorMessage from "./ErrorMessage";

export default function AppFormPicker({items, name,placeholder,width, PickerItemComponent,numberOfColumns}) {
    const {errors, setFieldValue, touched, values} = useFormikContext();
    return (
        <>
        <Picker 
        item={items}
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
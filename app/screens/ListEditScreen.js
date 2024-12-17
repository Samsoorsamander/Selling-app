import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup"

import { AppForm,AppFormField,AppFormPicker ,SubmitButton } from "../../Components/forms";
import Screen from "./Screen";
import CategoryPickerItem from "../../Components/CategoryPickerItem";

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.string().required().nullable().label("Category"),

});

const categories = [
    {label: "Furniture", value: 1, backgroundColor:"red", Icons:"sofa"},
    {label: "Cars", value: 2, backgroundColor:"orange", Icons:"car"},
    {label: "Camera", value: 3, backgroundColor:"yellow", Icons:"camera"},
    {label: "Games", value: 1, backgroundColor:"red", Icons:"gamepad-variant"},
    {label: "Clothing", value: 2, backgroundColor:"green", Icons:"shoe-heel"},
    {label: "Sports", value: 3, backgroundColor:"blue", Icons:"cricket"},
    {label: "Movies & Music", value: 1, backgroundColor:"red", Icons:"movie"},
    {label: "Books", value: 2, backgroundColor:"green", Icons:"book"},
    {label: "Others", value: 3, backgroundColor:"blue", Icons:"star"},
]

export default function ListEditScreen({}) {
    return (
        <Screen style={Styles.container}>
            <AppForm
            initialValues={{
                title:"",
                price:"",
                description:"",
                category:null,
            }}
            onSubmit={(values) => console.log(values)}
            validationSchema={validationSchema}
            >
                <AppFormField 
                maxLength={255} 
                name="title" 
                placeholder="Title"/>
                <AppFormField 
                keyboardType="numeric" 
                maxLength={8} 
                name="price" 
                placeholder="Price"
                width={120}
                />

                <AppFormPicker  
                name="category" 
                placeholder="Category"
                numberOfColumns={3} 
                PickerItemComponent={CategoryPickerItem}
                item={categories}
                width="50%"
                />
                <AppFormField 
                maxLength={255} 
                numberOfLines={3} 
                name="description" 
                placeholder="Description"/>
                <SubmitButton title="Post"/>


            </AppForm>

        </Screen>

    )
}

const Styles =StyleSheet.create({
    container: {
        padding: 10,
    },
})
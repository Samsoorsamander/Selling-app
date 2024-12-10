import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup"

import { AppForm,AppFormField,AppFormPicker ,SubmitButton } from "../../Components/forms";
import Screen from "./Screen";

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.string().required().nullable().label("Category"),

});

const categories = [
    {label: "Furniture", value: 1},
    {label: "Clothing", value: 2},
    {label: "Camera", value: 3},
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
                <AppFormField maxLength={255} name="title" placeholder="Title"/>
                <AppFormField keyboardType="numeric" maxLength={8} name="price" placeholder="Price"/>
                <AppFormField  name="category" placeholder="Category" item={categories}/>
                <AppFormField maxLength={255} numberOfLines={3} name="description" placeholder="Description"/>
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
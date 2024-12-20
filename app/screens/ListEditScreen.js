import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import * as Location from "expo-location";
import * as Yup from "yup";

import { ErrorMessage, Form, FormField, FormPicker, SubmitButton } from "../../Components/forms";
import Screen from "./Screen";
import CategoryPickerItem from "../../Components/CategoryPickerItem";
import FormImagePicker from "../../Components/forms/FormImagePicker";

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.string().required().nullable().label("Category"),
    images: Yup.array().min(1, "Please select at least one image."),
});

const categories = [
    { label: "Furniture", value: 1, backgroundColor: "red", Icons: "sofa" },
    { label: "Cars", value: 2, backgroundColor: "orange", Icons: "car" },
    { label: "Camera", value: 3, backgroundColor: "yellow", Icons: "camera" },
    { label: "Games", value: 4, backgroundColor: "red", Icons: "gamepad-variant" },
    { label: "Clothing", value: 5, backgroundColor: "green", Icons: "shoe-heel" },
    { label: "Sports", value: 6, backgroundColor: "blue", Icons: "cricket" },
    { label: "Movies & Music", value: 7, backgroundColor: "red", Icons: "movie" },
    { label: "Books", value: 8, backgroundColor: "green", Icons: "book" },
    { label: "Others", value: 9, backgroundColor: "blue", Icons: "star" },
];

export default function ListEditScreen() {
    const [location, setLocation] = useState();
    const getLocation = async () => {
        try {
            // Request permissions for location
            const { granted } = await Location.requestBackgroundPermissionsAsync(); // Use foreground permissions
            if (!granted) {
                console.log("Permission not granted");
                return;
            }

            // Attempt to get the last known position
            const lastKnownLocation = await Location.getLastKnownPositionAsync();

            // If no last known position, try to get the current position
            if (lastKnownLocation) {
                const { latitude, longitude } = lastKnownLocation.coords;
                setLocation({ latitude, longitude });
            } else {
                const currentPosition = await Location.getCurrentPositionAsync();
                const { latitude, longitude } = currentPosition.coords;
                setLocation({ latitude, longitude });
            }
        } catch (error) {
            console.log("Error getting location:", error);
        }
    };
    useEffect(() => {
        getLocation();
    },[])
    return (
        <Screen style={styles.container}>
            <Form
                initialValues={{
                    title: "",
                    price: "",
                    description: "",
                    category: null,
                    images: [],
                }}
                onSubmit={(values) => console.log(location)}
                validationSchema={validationSchema}
            >
                <FormImagePicker name="images" />
                <FormField
                    maxLength={255}
                    name="title"
                    placeholder="Title"
                />
                <FormField
                    keyboardType="numeric"
                    maxLength={8}
                    name="price"
                    placeholder="Price"
                    width={120}
                />
                <FormPicker
                    name="category"
                    placeholder="Category"
                    numberOfColumns={3}
                    PickerItemComponent={CategoryPickerItem}
                    items={categories} 
                    width="50%"
                />
                <FormField
                    maxLength={255}
                    numberOfLines={3}
                    name="description"
                    placeholder="Description"
                />
                <SubmitButton title="Post" />
            </Form>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
});

import { Switch } from "react-native"
import Screen from "./screens/Screen"
import { useState } from "react"
import AppPicker from "../Components/AppPicker";
import AppTextInput from "../Components/AppTextInput";

const categories = [
    {label: "Furnitures", value: 1},
    {label: "Clothing", value: 2},
    {label: "Camera", value: 3},
]

export default function App() {
    const [category, setCategory] = useState(categories[0]);

    return (
        <Screen>
            <AppPicker
            selectedItem={category}
            onSelectItem={item => setCategory(item)}
            item={categories}
            placeholder="Category"
            icon="apps"/>

            <AppTextInput placeholder="Email" icon="email"/>
        </Screen>
        )
}
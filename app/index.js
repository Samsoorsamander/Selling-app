import { Switch } from "react-native"
import Screen from "./screens/Screen"
import { useState } from "react"
import AppPicker from "../Components/AppPicker";
import AppTextInput from "../Components/AppTextInput";

export default function App() {
    const [isNew, setIsNew] =useState(false);

    return (
        <Screen>
            <AppPicker placeholder="Catagory" icon="apps"/>
            <AppTextInput placeholder="Email" icon="email"/>
        </Screen>
        )
}
import { Switch } from "react-native"
import Screen from "./screens/Screen"
import { useState } from "react"

export default function App() {
    const [isNew, setIsNew] =useState(true);

    return (
        <Screen>
            <Switch value={isNew} onValueChange={(newValue) => setIsNew(newValue)}/>
        </Screen>
        )
}
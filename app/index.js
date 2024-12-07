import AppTextInput from "../Components/AppTextInput"
import ListingScreen from "./screens/ListingScreen"
import Screen from "./screens/Screen"

export default function App() {
    return (
        <Screen>
            <AppTextInput icon="email" placeholder="Username"  />
        </Screen>
        )
}
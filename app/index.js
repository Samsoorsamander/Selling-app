import { GestureHandlerRootView } from "react-native-gesture-handler"
import ListingDetailsScreen from "./screens/LIstingDetailsScreen"
import MessagesScreen from "./screens/MessagesScreen"
import ViewImageScreen from "./screens/ViewImageScreen"

export default function App() {
    return (
        <GestureHandlerRootView>
        <MessagesScreen />
        </GestureHandlerRootView>
     
        )
}
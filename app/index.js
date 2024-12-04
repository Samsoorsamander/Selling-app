import Screen from "./screens/Screen"
import Icons from "../Components/Icons"

export default function App() {
    return (
        <Screen>
            <Icons
            name="email"
            size={50}
            backgroundColor="red"
            IconColor="white" 
            />
        </Screen>
     
        )
}
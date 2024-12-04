import Screen from "./screens/Screen"
import Icons from "../Components/Icons"
import ListItem from "../Components/ListItem"
import {GestureHandlerRootView} from "react-native-gesture-handler"

export default function App() {
    return (
        <Screen>
            <GestureHandlerRootView>
            <ListItem title="MyTitle" ImageComponent={<Icons name="email"/>}/>
                
            </GestureHandlerRootView>            
        </Screen>
     
        )
}
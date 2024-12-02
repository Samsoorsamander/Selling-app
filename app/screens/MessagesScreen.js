import { FlatList } from "react-native";
import ListItem from "../../Components/ListItem";

const messages = [
    {
        id: 1,
        title: "T1",
        descreiption: "D1",
        Image:require("../assets/img1.jpg")
    },
    {
        id: 2,
        title: "T2",
        descreiption: "D2",
        Image:require("../assets/img1.jpg")
    }
]
export default function MessagesScreen() {
    return (
        <FlatList 
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({item}) => <ListItem 
        title={item.title}
        subTitle={item.descreiption}
        image={item.Image}
        />}
        />
    )
}
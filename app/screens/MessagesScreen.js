import { FlatList,StyleSheet, View } from "react-native";
import ListItem from "../../Components/ListItem";
import Screen from "./Screen";
import ListItemSeparator from "../../Components/ListItemSeparator";
import { useState } from "react";
import ListItemDelete from "../../Components/ListItemDeleteAction";
const Intialmessages = [
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
export default function MessagesScreen(props) {
    const[messages,setMessages] =useState(Intialmessages);
    const handleDelete = (message) => {
        const newMessages = messages.filter((m) => m.id !== message.id);
        setMessages(newMessages);
    }

    return (
        <Screen >
        <FlatList 
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({item}) => <ListItem 
        title={item.title}
        subTitle={item.descreiption}
        image={item.Image}
        onPress={() => console.log("Message is selected", item)}
        renderRightAction={() => <ListItemDelete onPress={() => handleDelete(item)}/>}        

        />}
        ItemSeparatorComponent={ListItemSeparator}

        />
        </Screen>
    )
}

const styles= StyleSheet.create({
})
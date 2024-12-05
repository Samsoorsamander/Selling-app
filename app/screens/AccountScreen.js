import { View, StyleSheet, FlatList } from "react-native"
import {GestureHandlerRootView} from "react-native-gesture-handler"

import ListItem from "../../Components/ListItem"
import Screen from "./Screen"
import colors from "../../config/colors"
import Icons from "../../Components/Icons"
import ListItemSeparator from "../../Components/ListItemSeparator"

const itemsMenu =[
        
        {
            title:"My Listing",
            icon: {
                name: "format-list-bulleted"
            }

        },
        {
            title:"My Messages",
            icon: {
                name:"email",
            backgroundColor: colors.secondary

            }
        }
    
]
export default function AccountScreen() {
    return (
        <Screen style={styles.screen}>
       
            <GestureHandlerRootView>
                <View style={styles.container}>
                <ListItem 
                title="Samsoor"
                subTitle="samsoorsamander@gmail.com"
                image={require("../assets/img1.jpg")}/>
                </View>
            <View style={styles.container}>
        <FlatList
        data={itemsMenu}
        keyExtractor={menuItem => menuItem.title}
        ItemSeparatorComponent={ListItemSeparator}
        renderItem={({item}) => 
                <ListItem 
                title={item.title}
                IconComponent={
                    <Icons 
                    name={item.icon.name}
                    backgroundColor={item.icon.backgroundColor}
                     />
                }
                />
    }
        />
       </View>
       <ListItem 
       title="LOg Out"
       IconComponent={
        <Icons name="logout" backgroundColor="#ffe66d"/>
       }
       />
       
       </GestureHandlerRootView>
       
        </Screen>

    )

}

const styles =StyleSheet.create({
    container:{
        marginVertical: 20
    },
    screen: {
        backgroundColor: colors.light
    }
})
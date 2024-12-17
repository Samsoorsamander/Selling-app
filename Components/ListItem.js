import Swipeable from "react-native-gesture-handler/Swipeable"
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"

import AppText from "./AppText";
import colors from "../config/colors";

export default function ListItem({title, subTitle, IconComponent, image, onPress,renderRightAction}) {
    return (
        <>
     <Swipeable
     renderRightActions={renderRightAction}
     >
        
            <TouchableHighlight
        underlayColor={colors.light}
        onPress={onPress}
        >
            
        <View style= {styles.container}>
            {IconComponent}
            {image && <Image style= {styles.image} source={image} />}
            <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
            </View>
            <MaterialCommunityIcons name="chevron-right" size={25} color={colors.medium}/>
        </View>
        </TouchableHighlight>
    </Swipeable>
    </>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10,
    },
    container: {
        flexDirection: "row",
        padding: 10,
        backgroundColor: colors.white,
        alignItems:"center"
    },
    detailsContainer: {
        marginLeft: 10,
        justifyContent: "center",
        flex:1,
    },
    title: {
        fontWeight:"500",

    },
    subTitle: {
        color: colors.medium,
    }
})
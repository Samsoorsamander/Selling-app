import Swipeable from "react-native-gesture-handler/Swipeable"
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";

export default function ListItem({title, subTitle, image, onPress,renderRightAction}) {
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
            <Image style= {styles.image} source={image} />
            <View>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
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
        marginRight: 10
    },
    container: {
        flexDirection: "row",
        padding: 15
    },
    title: {
        fontWeight:"500",

    },
    subTitle: {
        color: colors.medium,
    }
})
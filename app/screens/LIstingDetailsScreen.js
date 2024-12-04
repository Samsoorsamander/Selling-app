import { View, StyleSheet,Image } from "react-native";
import AppText from "../../Components/AppText";
import colors from "../../config/colors";
import ListItem from "../../Components/ListItem";
import ListItemDelete from "../../Components/ListItemDeleteAction";
export default function ListingDetailsScreen(props) {
    return (
        <View>
            <Image style={styles.image} source={require("../assets/img4.jpeg")}/>
            <View style ={styles.detailsContainer}>
            <AppText style={styles.title}>Red jacket for sale</AppText>
            <AppText style={styles.price}> 100$</AppText>
             </View>
             <View style ={styles.userContainer}>
             <ListItem 
             image = {require("../assets/img1.jpg")}
             title ="Samsoor Samander"
             subTitle =" 5 Listings"


             />
             </View>
        </View>
    )
}

const styles =StyleSheet.create({
    image: {
        width: "100%",
        height: 300,
    },
    detailsContainer: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "500",
    },
    price: {
        color: colors.secondary,
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 10
    },
    userContainer: {
        marginVertical: 40
    }
})
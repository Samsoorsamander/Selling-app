import { FlatList } from "react-native";
import Card from "../../Components/Card";
import Screen from "./Screen";

const listings = [
    {
        id: 1,
        title: "Red jacket for sale",
        price: 100,
        Image: require("../assets/img2.jpeg")
    },
    {
        id: 2,
        title: "Couch in great condition",
        price: 1000,
        Image: require("../assets/img3.jpeg")
    },
]


export default function ListingScreen() {
    return (
        <Screen>
                <FlatList 
                data={listings}
                keyExtractor={(listings) => listings.id.toString()}
                renderItem={({item}) => 
                <Card title={item.title}
                subTitle={"$" + item.price}
                image={item.Image}
                />
            }
                />
        </Screen>
    )
}
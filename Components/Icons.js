import { View} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"

export default function Icons({
    name,
    size = 40,
    backgroundColor="#000",
    IconColor="#fff"
}) {
    return (
        <View style={{
            width:size,
        height: size,
        backgroundColor:backgroundColor,
        borderRadius: size / 2,
        justifyContent: "center",
        alignItems: 'center'
        }}>
            <MaterialCommunityIcons name={name} size={size * 0.5} color={IconColor}/>
        </View>
    )
}



import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { View, StyleSheet, TextInput, Platform, Modal, Button } from "react-native";
import defaultStyles from"../config/styles"
import Screen from "../app/screens/Screen";
import AppText from "./AppText";
import { TouchableWithoutFeedback } from "react-native";
import { useState } from "react";
export default function AppPicker({icon,placeholder, ...otherProps}) {
    const [modalVisible, setModalVisible] = useState(false)

    return (
        <>
        <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
            
      <View style={styles.container}>
           { icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.medium} style={styles.icon}/> }
            <AppText style={styles.text}>{placeholder}</AppText>
            <MaterialCommunityIcons name="chevron-down" size={20} color={defaultStyles.colors.medium} />
        </View>
        </TouchableWithoutFeedback>
        <Modal visible={modalVisible} animationType="slide">
            <Screen>
            <Button title="close" onPress={() => setModalVisible(false)}/>
            </Screen>
        </Modal>
        
        
        </>
    )
}

const styles =StyleSheet.create({
    container: {
        backgroundColor:defaultStyles.colors.light,
        borderRadius: 25,
        width:"100%",
        flexDirection: 'row',
        padding: 15,
        marginVertical: 10,
        alignItems: 'center'
 
    },
    
    icon: {
        marginRight: 10,

    },
    text: {
        flex: 1,
    }
})
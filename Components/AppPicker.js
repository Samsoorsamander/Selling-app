import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { View, StyleSheet, Modal, Button, FlatList } from "react-native";
import defaultStyles from"../config/styles"
import Screen from "../app/screens/Screen";
import AppText from "./AppText";
import { TouchableWithoutFeedback } from "react-native";
import { useState } from "react";
import PickerItem from "./PickerItem";
import styles from "../config/styles";
export default function AppPicker({
    icon,
    item, 
    selectedItem, 
    placeholder, 
    onSelectItem, 
    width="100%",
}) {
    const [modalVisible, setModalVisible] = useState(false)

    return (
        <>
        <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
            
      <View style={[Styles.container, {width}]}>
           { icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.medium} style={styles.icon}/> }
           {selectedItem ?( 
            <AppText style={Styles.text}>{selectedItem.label}</AppText>)
            : (<AppText style={Styles.placeholder}>{placeholder}</AppText>)}
            
            <MaterialCommunityIcons name="chevron-down" size={20} color={defaultStyles.colors.medium} />
        </View>
        </TouchableWithoutFeedback>
        <Modal visible={modalVisible} animationType="slide">
            <Screen>
            <Button title="close" onPress={() => setModalVisible(false)}/>
            <FlatList 
            data={item}
            keyExtractor={item => item.value.toString()}
            renderItem={({item}) => <PickerItem label={item.label} onPress={() => {
                setModalVisible(false);
                onSelectItem(item)
            }}/>}
            />
            </Screen>
        </Modal>
        
        
        </>
    )
}

const Styles =StyleSheet.create({
    container: {
        backgroundColor:defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        padding: 15,
        marginVertical: 10,
        alignItems: 'center'
 
    },
    
    icon: {
        marginRight: 10,

    },
    placeholder: {
        flex: 1,
        color: defaultStyles.colors.medium,
    },
    text: {
        flex: 1,
    }
})
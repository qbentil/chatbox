import React from "react"
import { TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import Colors from "../constants/Colors"
import { useNavigation } from "@react-navigation/native"
import tw from 'twrnc'
import { Text } from "./Themed"

const GoBack = (props) => {
    const backText = (props.count === undefined || props.count == 0) ? "Back" : props.count
    const navigation = useNavigation()
    return (
        <TouchableOpacity
            activeOpacity={.7}
            onPress={() => navigation.goBack()}
            style={[tw`flex-row`, props.style]}
        >
            <Ionicons
                name="chevron-back-sharp" 
                size={30}
                color={Colors.light.tint}
                style={tw`font-bold`}
            />
            <Text
                style={[tw`mt-1`, {fontSize: 18, color:Colors.light.tint }]}
            >{backText}</Text>
        </TouchableOpacity>
    )
}


export default GoBack;
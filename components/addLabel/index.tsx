import { Text, View } from "../Themed";
import { style } from "./style";
import tw from 'twrnc'
import { TextInput } from "react-native";
import Colors from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";
import ColorPicker from 'react-native-wheel-color-picker'

const AddLabel = () => {
    const colorScheme = useColorScheme()
    return(
        <View style = {[tw`border-b`,{borderColor: Colors[colorScheme].backgroundOpac,}]}>
            <View style = {[tw`flex-row py-5 mx-2`,]}>
                <View style = {[tw`mr-4`,style.colorPicker]}>
				{/* <ColorPicker
					thumbSize={10}
					sliderSize={10}
					// noSnap={true}
					row={false}
				/> */}
                </View>
                <View style={[tw`flex-row justify-between border-b border-t w-74 `, style.input, {borderColor: Colors[colorScheme].backgroundOpac}]} >
                    <TextInput 
                        style={[style.input, {color: Colors[colorScheme].text}]} 
                        placeholder="Add Label Name" 
                        autoFocus = {true}
                    />
                    <Text style={[tw`mt-4`, style.text, {color: Colors[colorScheme].backgroundOpac}]}>100</Text>
                </View>
            </View>
        </View>
    )
}


export default AddLabel;
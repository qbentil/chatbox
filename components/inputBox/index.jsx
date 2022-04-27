import { Feather, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons'
import { Keyboard, KeyboardAvoidingView, Platform, TextInput, TouchableNativeFeedback, TouchableOpacity } from 'react-native'
import { Text, View } from '../Themed'

import Colors from '../../constants/Colors'
import React from 'react'
import tw from 'twrnc'
import useColorScheme from '../../hooks/useColorScheme'

export default function InputBox() {
  colorScheme = useColorScheme()
  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableNativeFeedback onPress={Keyboard.dismiss} >
        <View style = {tw`flex flex-row justify-between px-5 py-3 w-100 items-end`}>
          <TouchableOpacity style = {tw`mb-1`}>
            <Feather name="plus" size={24} color={Colors.light.tint} />
          </TouchableOpacity>
          <View>
            <TextInput 
              multiline
              numberOfLines={4}
              onChangeText={(text) => console.log(text)}
              returnKeyType= {"return"}
              style={tw`p-2 border border-[${Colors[colorScheme].backgroundOpac}] w-70 min-h-8 text-[#eee] max-h-30 rounded-2xl `}
            />
          </View>
          <View style = {tw`flex flex-row justify-between w-[40px] mb-1`}>
            <TouchableOpacity style = {tw`mx-1`} >
              <SimpleLineIcons name="camera" size={24} color={Colors.light.tint} />
            </TouchableOpacity>
            <TouchableOpacity style = {tw`mx-1`} >
              <MaterialIcons name="keyboard-voice" size={24} color={Colors.light.tint} />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableNativeFeedback>
    </KeyboardAvoidingView>
  )
}
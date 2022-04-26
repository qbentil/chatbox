import { Feather, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons'
import { Keyboard, KeyboardAvoidingView, Platform, TextInput, TouchableNativeFeedback } from 'react-native'
import { Text, View } from '../Themed'

import Colors from '../../constants/Colors'
import React from 'react'
import tw from 'twrnc'

export default function InputBox() {
  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableNativeFeedback onPress={Keyboard.dismiss} >
        <View style = {tw`flex flex-row justify-between px-5 py-3 w-100 items-center`}>
          <View style={{}}>
            <Feather name="plus" size={24} color={Colors.light.tint} />
          </View>
          <View>
            <TextInput 
              multiline
              numberOfLines={4}
              onChangeText={(text) => console.log(text)}
              returnKeyType= {"send"}
              style={tw`p-2 border-2 border-gray-400 w-70 h-100 rounded-2xl`}
            />
          </View>
          <View style = {tw`flex flex-row justify-between w-[40px]`}>
            <SimpleLineIcons name="camera" size={24} color={Colors.light.tint} style = {tw`mx-1`} />
            <MaterialIcons name="keyboard-voice" size={24} color={Colors.light.tint} style = {tw`mx-1`} />
          </View>
        </View>
      </TouchableNativeFeedback>
    </KeyboardAvoidingView>
  )
}
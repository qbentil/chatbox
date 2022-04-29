import { Feather, Ionicons, MaterialCommunityIcons, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons'
import { Keyboard, KeyboardAvoidingView, Platform, TextInput, TouchableNativeFeedback, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Text, View } from '../Themed'

import Colors from '../../constants/Colors'
import tw from 'twrnc'
import useColorScheme from '../../hooks/useColorScheme'

export default function InputBox() {
  colorScheme = useColorScheme()
  const [chatMsg, setChatMsg] = useState('')

  const formatMsg = (msg) => msg.replace(/^\s+|\s+$/g, '');
  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableNativeFeedback onPress={Keyboard.dismiss} >
        <View style = {tw`flex flex-row justify-between px-5 py-3 w-100 items-end`}>
          <TouchableOpacity style = {tw`mb-1`}>
            <Feather name="plus" size={24} color={Colors.light.tint} />
          </TouchableOpacity>
          <View style = {tw`w-${chatMsg.length <=0? '70': '80'}`}>
            <TextInput 
              multiline
              numberOfLines={4}
              onChangeText={(text) => setChatMsg(formatMsg(text))}
              placeholder = 'Message'
              placeholderTextColor = {Colors[colorScheme].backgroundOpac}
              returnKeyType= {"next"}
              returnKeyLabel = {"return"}
              spellCheck
              enablesReturnKeyAutomatically
              keyboardType='ascii-capable'
              style={tw`p-2 border border-[${Colors[colorScheme].backgroundOpac}] w-full min-h-8 text-[#eee] max-h-30 rounded-2xl `}
            />
            <TouchableOpacity style={tw`absolute right-0 mr-2`}>
              <MaterialCommunityIcons name="sticker-outline" size={24} style={tw`mt-[6px]`} color={Colors.light.tint} />
            </TouchableOpacity>
          </View>
          { chatMsg.length <=0 ? (
          <View style = {tw`flex flex-row justify-between w-[40px] mb-1`}>
            <TouchableOpacity style = {tw`mx-1`} >
              <SimpleLineIcons name="camera" size={24} color={Colors.light.tint} />
            </TouchableOpacity>
            <TouchableOpacity style = {tw`mx-1`} >
              <MaterialIcons name="keyboard-voice" size={24} color={Colors.light.tint} />
            </TouchableOpacity>
          </View>):(
            <View>
              <TouchableOpacity style = {tw` ml-1 p-1 flex items-center justify-center rounded-full h-7 w-7 bg-[${Colors.light.tint}]`}>
                <Ionicons name="send" size={18} color={'#fff'} style={tw`ml-1`} />
              </TouchableOpacity>
            </View>
          )
          }
        </View>
      </TouchableNativeFeedback>
    </KeyboardAvoidingView>
  )
}
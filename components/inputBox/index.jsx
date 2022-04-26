import { Feather, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons'
import { KeyboardAvoidingView, TextInput } from 'react-native'
import { Text, View } from '../Themed'

import Colors from '../../constants/Colors'
import React from 'react'
import tw from 'twrnc'

export default function InputBox() {
  return (
    <KeyboardAvoidingView style = {tw`flex justify-evenly`}>
      <View>
        <Feather name="plus" size={24} color={Colors.light.tint} />
      </View>
      <View>
        <TextInput />
      </View>
      <View style = {tw`flex justify-evenly`}>
        <SimpleLineIcons name="camera" size={24} color={Colors.light.tint} />
        <MaterialIcons name="keyboard-voice" size={24} color={Colors.light.tint} />
      </View>
    </KeyboardAvoidingView>
  )
}
import { KeyboardAvoidingView, TextInput } from 'react-native'
import { Text, View } from '../Themed'

import Colors from '../../constants/Colors'
import { Feather } from '@expo/vector-icons'
import React from 'react'
import tw from 'twrnc'

export default function InputBox() {
  return (
    <KeyboardAvoidingView>
      <View>
        <Feather name="plus" size={24} color={Colors.light.tint} />
      </View>
      <View>
        <TextInput />
      </View>
      <View>
        
      </View>
    </KeyboardAvoidingView>
  )
}
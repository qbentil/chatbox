import { Text, View } from '../Themed'

import Colors from '../../constants/Colors'
import React from 'react'
import tw from 'twrnc'
import useColorScheme from '../../hooks/useColorScheme'

export default function SectionTitle({title}) {
  const colorScheme = useColorScheme();
  return (
    <View style={tw`w-full bg-${colorScheme == 'light'? `[#ebebeb]`:'[#3b3b3b]'} p-2`}>
        <Text style = {tw`uppercase font-semibold text-[13px] ml-3`}>{title}</Text>
    </View>
  )
}

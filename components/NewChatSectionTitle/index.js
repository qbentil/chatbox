import { Text, View } from '../Themed'

import React from 'react'
import tw from 'twrnc'

export default function SectionTitle({title}) {
  return (
    <View style={tw`w-full bg-[#3b3b3b] p-2`}>
        <Text style = {tw`uppercase font-semibold text-[12px] ml-3`}>{title}</Text>
    </View>
  )
}

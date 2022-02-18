import { ChatRoom, Label } from '../../types';
import { Image, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, View } from '../Themed';

import React from 'react';
import tw from 'twrnc'

export type LabelListItemProp = {
    label: Label;
}
const LabelListItem = (props: LabelListItemProp) => {
    const { label } = props;
    return (
        <TouchableOpacity style={tw`flex-row justify-between mx-2 my-1`}>
          <View style={tw`flex-row justify-between mx-2`}>
            <MaterialCommunityIcons name='label' size={30} color = {label.color} style={tw`mr-2`} />
            <Text style = {tw`text-lg font-bold`}>{label.title}</Text>
          </View>
          <View style={tw`flex-row justify-between mx-2`}>
            <Text style = {tw`text-lg mr-1`}>{label.users.length}</Text>
            <Ionicons name='chevron-forward-sharp' color={'gray'} size={25} />          
          </View>
      </TouchableOpacity>
    )
}

export default LabelListItem;

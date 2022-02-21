import { Image, TouchableOpacity } from 'react-native';
import { Text, View } from '../Themed';

import { Call } from '../../types';
import Colors from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import Style from './Style';
import moment from 'moment';
import tw from 'twrnc'
import useColorScheme from '../../hooks/useColorScheme';
import { useNavigation } from '@react-navigation/native';

export type CallListItemProp = {
    call: Call;
}
const CallListItem = (props: CallListItemProp) => {
    const { call } = props;
    const navigation = useNavigation();
    const colorScheme = useColorScheme()
    let date = moment(call.date).calendar()
    if(date.split(" ")[0] == "Today")
    {
      date = moment(call.date).format("LT")
    }else if (date.split(" ")[0] == "Yesterday")
    {
      date = date.split(" ")[0]
    }else if (date.split(" ")[0] == "Last")
    {
      date = date.split(" ")[1]
    }
    return (
        <TouchableOpacity activeOpacity = {.7} style={Style.container}>
          <View>
            <Image 
              source={{ 
                  uri: call.user.imageUri
              }} 
              style={Style.avatar}
            />
          </View>
          <View style = {[tw`border-b flex-row justify-between w-75`, {borderBottomColor: Colors[colorScheme].backgroundOpac}]}>
            <View>
              <Text style={[Style.username,tw`${call.type == "Missed"?'text-red-500': 'text-white'}`]}>{call.user.name}</Text>
              <View style = {[tw`flex-row mt-1`, {alignItems: 'center'} ]}>
                  <Ionicons name={call.mode == "audio"? "call": "md-videocam"} size={24} color = {'grey'} />
                 <Text numberOfLines={2} ellipsizeMode = {'tail'} style={Style.lastMessage}>{call.type}</Text>
              </View>
            </View>
            <View style = {[tw`flex-row `, {alignItems: 'center'}]}>
              <Text style={Style.time}>
                {date } 
              </Text>
              <TouchableOpacity>
                <Ionicons name='information-circle-outline' size={24} color={Colors.light.tint} />
              </TouchableOpacity>
            </View>
          </View>
      </TouchableOpacity>
    )
}
export default CallListItem;

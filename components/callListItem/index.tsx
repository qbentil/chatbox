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
              <Text style={Style.username}>{call.user.name}</Text>
              <View >
                  <Ionicons name='md-videocam' size={24} color = {'grey'} />
                 <Text numberOfLines={2} ellipsizeMode = {'tail'} style={Style.lastMessage}>{call.type}</Text>
              </View>
            </View>
            <View>
              <Text style={Style.time}>{moment(call.date).format("DD/MM/YYYY")} </Text>
              <Ionicons name='information-circle-outline' size={24} color={Colors.light.tint} />
            </View>
          </View>
      </TouchableOpacity>
    )
}
export default CallListItem;

import { Image, TouchableOpacity } from 'react-native';
import { Text, View } from '../Themed';

import { ChatRoom } from '../../types';
import React from 'react';
import Style from './Style';
import moment from 'moment';
import tw from 'twrnc'
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';

export type ChatListItemProp = {
    chatRoom: ChatRoom;
}
const ChatListItem = (props: ChatListItemProp) => {
    const { chatRoom } = props;
    const user = chatRoom.users[1];
    const colorScheme = useColorScheme()
    return (
        <TouchableOpacity activeOpacity = {.7} style={Style.container}>
          <View>
            <Image 
              source={{ 
                  uri: user.imageUri
              }} 
              style={Style.avatar}
            />
          </View>
          <View style = {[tw`border-b flex-row justify-between w-75`, {borderBottomColor: Colors[colorScheme].backgroundOpac}]}>
            <View>
              <Text style={Style.username}>{user.name}</Text>
              <Text numberOfLines={2} ellipsizeMode = {'tail'} style={Style.lastMessage}>{chatRoom.lastMessage.content}</Text>
            </View>
            <View>
              <Text style={Style.time}>
              {moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}
              </Text>
            </View>
          </View>
      </TouchableOpacity>
    )
}
export default ChatListItem;

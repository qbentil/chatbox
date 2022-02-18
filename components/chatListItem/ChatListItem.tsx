import { Text, View } from '../Themed';

import { ChatRoom } from '../../types';
import { Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Style from './Style';
import moment from 'moment';
import tw from 'twrnc'

export type ChatListItemProp = {
    chatRoom: ChatRoom;
}
const ChatListItem = (props: ChatRoom) => {
    const { chatRoom } = props;
    const user = chatRoom.users[1];
    return (
        <TouchableOpacity style={Style.container}>
        <View style={Style.lefContainer}>
          <Image 
            source={{ 
                uri: user.imageUri
            }} 
            style={Style.avatar}
        />

          <View style={{}}>
            <Text style={Style.username}>{user.name}</Text>
            <Text
              numberOfLines={2}
              style={Style.lastMessage}
              >{chatRoom.lastMessage.content}
            </Text>
          </View>

        </View>

        <Text style={Style.time}>
          {moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}
        </Text>
      </TouchableOpacity>
    )
}
// moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")

export default ChatListItem;

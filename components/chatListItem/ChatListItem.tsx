import { FlatList, Image, TextInput, TouchableOpacity } from 'react-native';
import { Text, View } from '../Themed';

import { ChatRoom } from '../../types';
import Colors from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import Style from './Style';
import tw from 'twrnc'
import useColorScheme from '../../hooks/useColorScheme';

export type ChatListItemProp = {
    chatRoom: ChatRoom;
}
const ChatListItem = (props: ChatRoom) => {
    const { chatRoom } = props;
    
    return (
        <View style={Style.container}>
        <View style={Style.lefContainer}>
          <Image 
            source={{ 
                uri: 'https://codersquiz.netlify.app/img/bentil.jpeg'
            }} 
            style={Style.avatar}
        />

          <View style={Style.midContainer}>
            <Text style={Style.username}>{chatRoom.users[0].name}</Text>
            <Text
              numberOfLines={2}
              style={Style.lastMessage}
              >{chatRoom.lastMessage.content}
            </Text>
          </View>

        </View>

        <Text style={Style.time}>
          {'yesterday'}
        </Text>
      </View>
    )
}
// moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")

export default ChatListItem;

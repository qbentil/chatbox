import { Image, TouchableOpacity } from 'react-native';
import { Text, View } from '../Themed';

import { ChatRoom } from '../../types';
import Colors from '../../constants/Colors';
import React from 'react';
import Style from './Style';
import moment from 'moment';
import tw from 'twrnc'
import useColorScheme from '../../hooks/useColorScheme';
import { useNavigation } from '@react-navigation/native';

export type ChatListItemProp = {
    chatRoom: ChatRoom;
}
const ChatListItem = (props: ChatListItemProp) => {
    const { chatRoom } = props;
    const navigation = useNavigation();
    const user = chatRoom.users[1];
    const colorScheme = useColorScheme()
    const onClick = () => {
      navigation.navigate("ChatRoom", {
        // How to pass Data to next screen during navigation
        id: chatRoom.id,
        name: user.name,
        imageUri: user.imageUri
      })
    }

    // fix date
    let date = moment(chatRoom.lastMessage.createdAt).calendar()
    if(date.split(" ")[0] == "Today")
    {
      date = moment(chatRoom.lastMessage.createdAt).format("LT")
    }else if (date.split(" ")[0] == "Yesterday")
    {
      date = date.split(" ")[0]
    }else if (date.split(" ")[0] == "Last")
    {
      date = date.split(" ")[1]
    }

    return (
        <TouchableOpacity activeOpacity = {.7} onPress = {() => onClick()} style={Style.container}>
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
              {date}
              </Text>
            </View>
          </View>
      </TouchableOpacity>
    )
}
export default ChatListItem;

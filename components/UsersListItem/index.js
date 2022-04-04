import { Image, TouchableOpacity } from 'react-native';
import { Text, View } from '../Themed';

import Colors from '../../constants/Colors';
import React from 'react';
import Style from './Style';
import tw from 'twrnc'
import useColorScheme from '../../hooks/useColorScheme';
import { useNavigation } from '@react-navigation/native';

const UserListItem = ({user}) => {
    const navigation = useNavigation();

    const colorScheme = useColorScheme()
    const onClick = () => {
      navigation.navigate("User", {
        id: user.id,
        name: user.name,
        imageUri: user.imageUri
      })
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
            {/* <View>
              <Text style={Style.time}>
              {date}
              </Text>
            </View> */}
          </View>
      </TouchableOpacity>
    )
}
export default UserListItem;

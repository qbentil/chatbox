import { FlatList, Image, TextInput, TouchableOpacity } from 'react-native';
import { Text, View } from '../Themed';

import { ChatRoom } from '../../types';
import ChatRooms from '../../data/ChatRooms';
import Colors from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import Style from './Style';
import tw from 'twrnc'
import useColorScheme from '../../hooks/useColorScheme';

const ChatListItem = (chatRoom) => {

    return (
        <View style={tw``}>
            <FlatList
                data={ChatRooms}
                scrollEnabled={false}
                keyExtractor={(item) => item.id}
                renderItem = {({item}) => (
                    <ScrollView style={tw`flex-row justify-between`}>
                        <View style={tw`flex-row justify-around my-2`}>
                            <Image 
                                source={{ uri: item.users.imageUri }}
                                style={[tw`bg-gray-500 rounded-full mr-2`, Style.avatar]} 
                            />
                            <View style={tw``}>
                                <Text style={tw`text-lg font-semibold`}>{'Ben'}</Text>
                                <Text>{item.lastMessage.content}</Text>
                            </View>
                        </View>

                        {/* timeStamp */}
                        <View>
                            <Text>yesterday</Text>
                        </View>
                    </ScrollView>
                )}
            />
        </View>
    )
}

export default ChatListItem;

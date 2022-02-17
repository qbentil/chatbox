import { FlatList, TextInput, TouchableOpacity } from 'react-native';
import { Text, View } from '../Themed';

import { ChatRoom } from '../../types';
import ChatRooms from '../../data/ChatRooms';
import Colors from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import tw from 'twrnc'
import useColorScheme from '../../hooks/useColorScheme';

// import { Text, View } from 'react-native';


const ChatListItem = (chatRoom) => {

    return (
        <View style={tw`flex-1 justify-between`}>
            <FlatList
                data={ChatRooms}
                scrollEnabled={false}
                keyExtractor={(item) => item.id}
                renderItem = {({item}) => {
                    {/* User image */}
                    <View>
                        <Text>Hello Bentil Shadrack </Text>
                    </View>

                    {/* Content */}
                    <View>

                    </View>

                    {/* timeStamp */}
                    <View>

                    </View>
                }}
            />
        </View>
    )
}

export default ChatListItem;

import { Text, View } from './Themed';
import { TextInput, TouchableOpacity } from 'react-native';

import { ChatRoom } from '../types';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import tw from 'twrnc'
import useColorScheme from '../hooks/useColorScheme';

import React from 'react';
import { Text, View } from 'react-native';

const ChatListItem = (chatRoom: ChatRoom) => {
    return (
        <View style={tw`flex-1 justify-space-between`}>
            {/* User image */}
            <View>
                
            </View>

            {/* Content */}
            <View>

            </View>

            {/* timeStamp */}
            <View>

            </View>
        </View>
    )
}

export default ChatListItem;

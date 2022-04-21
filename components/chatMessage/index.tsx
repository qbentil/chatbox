import { Text, View } from '../Themed';

import React from 'react';
import { chatMessageProps } from '../../types';
import moment from 'moment';

// import { Text, View } from 'react-native';





const ChatMessage = (props: chatMessageProps) => {
    const {message} = props;
    return (
        <View>
            <Text>{message.user.name}</Text>
            <Text>{message.content}</Text>
            <Text>{moment(message.createdAt).fromNow()}</Text>
        </View>
    )
}

export default ChatMessage;
import React from 'react';
import { Text } from '../Themed';
import { chatMessageProps } from '../../types';

const ChatMessage = (props: chatMessageProps) => {
    const {message} = props;
    return (
        <Text>{message.content}</Text>
    )
}

export default ChatMessage;
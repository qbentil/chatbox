import React from 'react';
import { Text } from '../Themed';
import { chatMessageProps } from '../../types';

const ChatMessage = (props: chatMessageProps) => {
    const {message} = props;
    return (
        <Text>{message}</Text>
    )
}

export default ChatMessage;
import {FlatList, ScrollView} from 'react-native';

import ChatListItem from './chatListItem';
import ChatRooms from '../data/ChatRooms';

const ChatList = () => {
    const SortedChatData = ChatRooms.slice().sort((a, b) => new Date(b.lastMessage.createdAt) - new Date(a.lastMessage.createdAt))
    return (

        <FlatList 
        data={SortedChatData}
            style={{width: "100%"}}
            scrollEnabled = {false}
            keyExtractor = {(item) => item.id}
            renderItem = {({item}) => (
               <ChatListItem chatRoom = {item} /> 
            )}
            
        />

    );

}

export default ChatList;
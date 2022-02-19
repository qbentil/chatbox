import {FlatList, ScrollView} from 'react-native';

import ChatListItem from './chatListItem/ChatListItem';
import ChatRooms from '../data/ChatRooms';

const ChatList = () => {

    return (

        <FlatList 
            scrollEnabled = {false}
            data={ChatRooms}
            style={{width: "100%"}}
            keyExtractor = {(item) => item.id}
            renderItem = {({item}) => (
               <ChatListItem chatRoom = {item} /> 
            )}
        />

    );

}

export default ChatList;
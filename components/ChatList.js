import ChatListItem from './chatListItem/ChatListItem';
import ChatRooms from '../data/ChatRooms';
import {FlatList} from 'react-native';

const ChatList = () => {

    return (
        <FlatList 
            data={ChatRooms}
            keyExtractor = {(item) => item.id}
            renderItem = {({item}) => (
               <ChatListItem chatRoom = {item} /> 
            )}
        />

    );

}

export default ChatList;
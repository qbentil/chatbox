import {FlatList, ScrollView} from 'react-native';

import ChatListItem from './chatListItem';
import ChatRooms from '../data/ChatRooms';
import FlatListView from './Lists/FlatList';
import SectionListView from './Lists/SectionList';
import Users from '../data/Users';

const ContactList = () => {
    const SortedChatData = ChatRooms.slice().sort((a, b) => new Date(b.lastMessage.CreatedAt) - new Date(a.lastMessage.CreatedAt));
    // const SortedUsers = Users.slice().sort((a, b) => a - b);

    return (

        // <FlatListView data={SortedChatData} />
        <SectionListView contacts={Users} />

    );

}

export default ContactList;
import {FlatList, ScrollView} from 'react-native';

import ChatListItem from './chatListItem';
import ChatRooms from '../data/ChatRooms';
import FlatListView from './Lists/FlatList';
import SectionListView from './Lists/SectionList';

const ContactList = ({data}) => {
    // const SortedChatData = ChatRooms.slice().sort((a, b) => new Date(b.lastMessage.CreatedAt) - new Date(a.lastMessage.CreatedAt));

    return (

        // <FlatListView data={SortedChatData} />
        <SectionListView contacts={data} />

    );

}

export default ContactList;
import {FlatList, ScrollView} from 'react-native';

import ChatListItem from '../chatListItem';

const FlatListView = ({data}) => {
    return (

        <FlatList 
            scrollEnabled = {false}
            data={data}
            style={{width: "100%"}}
            keyExtractor = {(item) => item.id}
            renderItem = {({item}) => (
               <ChatListItem chatRoom = {item} /> 
            )}
            
        />
    )
}


export default FlatListView;
import * as React from 'react'

import { SafeAreaView, ScrollView } from 'react-native'
import {Text, View} from '../components/Themed'

import ChatMessage from '../components/chatMessage'
import ChatRoomData from '../data/Chats'
import ChatRoomScreenHeader from '../headers/ChatRoomScreenHeader'
import { FlatList } from 'react-native-gesture-handler'
import { useRoute } from '@react-navigation/native'
import { user } from '../types'

const ChatRoomScreen = () => {
    const route = useRoute();
    // useRoute Hook is used to access the params passed through the useNavigateion hook
    const user:user = route.params as user;
    
    return(
        <View>
            <ChatRoomScreenHeader user = {user}/>
            <FlatList 
                data={ChatRoomData.messages}
                renderItem = {({item}) => <ChatMessage message={item} /> }
            />
        </View>
    )
}

export default ChatRoomScreen
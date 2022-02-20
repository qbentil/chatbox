import * as React from 'react'
import { SafeAreaView } from 'react-native'
import {Text, View} from '../components/Themed'
import { useRoute } from '@react-navigation/native'
import ChatRoomScreenHeader from '../headers/ChatRoomScreenHeader'
const ChatRoomScreen = () => {
    const route = useRoute();
    
    return(
        <View>
            <ChatRoomScreenHeader />
        </View>
    )
}

export default ChatRoomScreen
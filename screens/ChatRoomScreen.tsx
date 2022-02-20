import * as React from 'react'

import {Text, View} from '../components/Themed'

import ChatRoomScreenHeader from '../headers/ChatRoomScreenHeader'
import { SafeAreaView } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { user } from '../types'

const ChatRoomScreen = () => {
    const route = useRoute();
    const user:user = route.params as user;
    
    return(
        <View>
            <ChatRoomScreenHeader name = {user.name} avatar = {user.imageUri}/>
        </View>
    )
}

export default ChatRoomScreen
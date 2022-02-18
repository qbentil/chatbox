import { ScrollView, StyleSheet, TextInput } from 'react-native';
import { Text, View } from '../components/Themed';

import ChatList from '../components/ChatList';
import ChatListItem from '../components/chatListItem/ChatListItem';
import ChatNavs from '../components/ChatNavs';
import ChatRooms from '../data/ChatRooms';
import ChatScreenHeader from '../headers/ChatScreenHeader';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { RootTabScreenProps } from '../types';
import SearchBar from '../components/searchBar/SearchBar';
import tw from 'twrnc'
import useColorScheme from '../hooks/useColorScheme';
import { useState } from 'react';

export default function ChatScreen({ navigation }: RootTabScreenProps<'Chats'>) {
  const colorScheme = useColorScheme();
  const [titleShown, setTitleShown] = useState(false)
  const handleScroll = function(event: Object) {
    event.nativeEvent.contentOffset.y <= 0 ? setTitleShown(false): setTitleShown(true)
  }
  
  return (
    <View style={[styles.container, {backgroundColor: Colors[colorScheme].background}]}>
        <ChatScreenHeader showTitle = {titleShown} />
        <ScrollView  
          onScroll={handleScroll} 
          scrollEventThrottle = {1}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
            <Text style = {[styles.title]}>WA Business</Text>
            <SearchBar />
            <ChatNavs />
            <ChatList />
          {/*  <ChatListItem chatRoom = {ChatRooms[2]} /> */}
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    minHeight: 800,
    flex: 1
    
  },
  title: {
    fontSize: 35,
    fontWeight: '600',
  },

});

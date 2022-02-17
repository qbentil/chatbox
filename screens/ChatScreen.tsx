import { ScrollView, StyleSheet, TextInput } from 'react-native';
import { Text, View } from '../components/Themed';

import ChatListItem from '../components/chatListItem/ChatListItem';
import ChatNavs from '../components/ChatNavs';
import ChatRooms from '../data/ChatRooms';
import Colors from '../constants/Colors';
import EditScreenInfo from '../components/EditScreenInfo';
import { Ionicons } from '@expo/vector-icons';
import { RootTabScreenProps } from '../types';
import SearchBar from '../components/searchBar/SearchBar';
import tw from 'twrnc'
import useColorScheme from '../hooks/useColorScheme';

export default function ChatScreen({ navigation }: RootTabScreenProps<'Chats'>) {
  const colorScheme = useColorScheme();
  
  return (
    <View style={[styles.container, {backgroundColor: Colors[colorScheme].background}]}>
      <Text style = {[styles.title]}>WA Business</Text>
      <SearchBar />
      <ChatNavs />
      <ChatListItem chatRoom = {ChatRooms[5]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    minHeight: 800
  },
  title: {
    fontSize: 35,
    fontWeight: '600',
  },

});

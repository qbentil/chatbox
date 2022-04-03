import { Platform, StyleSheet, View } from 'react-native';

import NewChatModalHeader from '../headers/NewChatModalHeader';
import NewChatNavs from '../components/NewChatNav';
import SearchBar from '../components/searchBar';
import { StatusBar } from 'expo-status-bar';
import { Text } from '../components/Themed';
import tw from 'twrnc';
import useColorScheme from '../hooks/useColorScheme';

export default function NewChatModalScreen() {
  const colorScheme = useColorScheme();
  return (
    <View style={styles.container}>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      {/* <NewChatModalHeader /> */}
      <View style = {tw`w-full px-3 bg-${colorScheme == 'light'? 'white': '[#333333]'}`}>
        <SearchBar style = {tw`bg-[#3b3b3b]`} />
      </View>
      <View style = {tw`w-full`}>
        <NewChatNavs />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

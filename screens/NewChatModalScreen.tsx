import { Platform, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

import NewChatModalHeader from '../headers/NewChatModalHeader';
import SearchBar from '../components/searchBar';
import { StatusBar } from 'expo-status-bar';

export default function NewChatModalScreen() {
  return (
    <View style={styles.container}>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      {/* <NewChatModalHeader /> */}
      <SearchBar />
      
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

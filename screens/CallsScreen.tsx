import { ScrollView, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

import CallLogs from "../components/CallLog"
import CallScreenHeader from '../headers/CallScreenHeader'
import SearchBar from '../components/searchBar';
import { useState } from 'react';

export default function CallsScreen() {
  const [logType, setLogType] = useState('all');

  return (
    <View style={styles.container}>
      <CallScreenHeader logType={setLogType} selected = {logType} />
      <ScrollView>
        <Text style = {[styles.title]}>Calls</Text>
        <SearchBar />
        <CallLogs type = {logType} />
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
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

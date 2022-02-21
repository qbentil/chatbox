import { Text, View } from '../components/Themed';

import CallListItem from '../components/callListItem';
import CallScreenHeader from '../headers/CallScreenHeader';
import CallsData from '../data/CallsData';
import SearchBar from '../components/searchBar';
import { StyleSheet } from 'react-native';

export default function CallsScreen() {
  return (
    <View style={styles.container}>
      <CallScreenHeader />
      <Text style = {[styles.title]}>Calls</Text>
      <SearchBar />
      {/* <CallListItem call={CallsData[0]} /> */}
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

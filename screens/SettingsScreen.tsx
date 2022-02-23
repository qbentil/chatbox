import { Text, View } from '../components/Themed';
import { StyleSheet, ScrollView } from 'react-native';
import { useState } from 'react';
import SettingsScreenHeader from '../headers/SettingsScreenHeader'
import Profile from '../components/Settings/profile';


export default function SettingsScreen() {
  const [titleShown, setTitleShown] = useState(false)


  const handleScroll = function(event: Object) {
    event.nativeEvent.contentOffset.y <= 0 ? setTitleShown(false): setTitleShown(true)
  }
  return (
    <View style={styles.container}>
      <SettingsScreenHeader showTitle = {titleShown} />
      <ScrollView  
          onScroll={handleScroll} 
          scrollEventThrottle = {1}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          nestedScrollEnabled
        >
           {!titleShown?  <Text style = {[styles.title]}>Settings</Text>: null}
          {/* User Profile */}
          <Profile />
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
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

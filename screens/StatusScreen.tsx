import { ScrollView, StyleSheet, TextInput } from 'react-native';
import { Text, View } from '../components/Themed';

import Colors from '../constants/Colors';
import { RootTabScreenProps } from '../types';
import SearchBar from '../components/searchBar';
import StatusProfile from '../components/Status';
import StatusScreenHeader from '../headers/StatusScreenHeader';
import useColorScheme from '../hooks/useColorScheme';
import { useState } from 'react';

export default function StatusScreen({ navigation }: RootTabScreenProps<'Chats'>) {
  const colorScheme = useColorScheme();
  const [titleShown, setTitleShown] = useState(false)
  const handleScroll = function(event: Object) {
    event.nativeEvent.contentOffset.y <= 0 ? setTitleShown(false): setTitleShown(true)
  }

  const onSearch = (name:string) => {
    console.log(name);
    
  }
  
  return (
    <View style={[styles.container, {backgroundColor: Colors[colorScheme].background}]}>
        <StatusScreenHeader showTitle = {titleShown} />
        <ScrollView  
          onScroll={handleScroll} 
          scrollEventThrottle = {1}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          nestedScrollEnabled
        >
           {!titleShown?  <Text style = {[styles.title]}>Status</Text>: null}
            <SearchBar search = {onSearch} style = {{backgroundColor: Colors[colorScheme].backgroundOpac}} />
            <StatusProfile />
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

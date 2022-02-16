import { ScrollView, StyleSheet, TextInput } from 'react-native';
import { Text, View } from '../components/Themed';

import Colors from '../constants/Colors';
import EditScreenInfo from '../components/EditScreenInfo';
import { Ionicons } from '@expo/vector-icons';
import { RootTabScreenProps } from '../types';
import SearchBar from '../components/SearchBar';
import useColorScheme from '../hooks/useColorScheme';

export default function ChatScreen({ navigation }: RootTabScreenProps<'Chats'>) {
  const colorScheme = useColorScheme();
  
  return (
    <ScrollView style={[styles.container, {backgroundColor: Colors[colorScheme].background}]}>
        <Text style = {styles.title}>WA Business</Text>
      {/* <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}

    {/* Import SearchBar */}
    <SearchBar path={"Search"} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20
  },
  title: {
    fontSize: 35,
    fontWeight: '600',
    
  },

});

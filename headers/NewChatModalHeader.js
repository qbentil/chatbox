import { Pressable, SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';

import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { Text } from '../components/Themed';
import tw from 'twrnc'
import useColorScheme from '../hooks/useColorScheme';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

const  NewChatModalHeader = () => {
    colorScheme = useColorScheme()
    const navigation = useNavigation()

  return (
    <View>
        <View style={[tw`mx-2 bg-gray-200 flex-row justify-between my-2 w-full`]}>
          <Pressable></Pressable>
          <Text style = {[tw`text-lg font-semibold`,styles.headerTitle]} >New Chat</Text>
          
          <TouchableOpacity>
            <Ionicons name='close' size={24} color={Colors[colorScheme].text} />
          </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bgTransparent: {
    backgroundColor: 'transparent',
    opacity: 1
  },
  toggler: {
    borderRadius: 8,
    width: 160,
    padding: 1.5
  },
  itemActive: {
    backgroundColor: 'white',
    borderRadius: 8,    
  },

});


// export const {logType} = NewChatModalHeader;

export default NewChatModalHeader;
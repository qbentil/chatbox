import { Pressable, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';

import Colors from '../constants/Colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Styles from '../constants/Styles';
import tw from 'twrnc'
import useColorScheme from '../hooks/useColorScheme';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

const  CallScreenHeader = ({logType, selected}) => {
    colorScheme = useColorScheme()
    const navigation = useNavigation()
  return (
    <View>
      <SafeAreaView >
        <View style={[tw`mx-0 flex-row justify-between my-2`]}>
          <Text style = {Styles.headerTitle} >Edit</Text>
          <View style = {[tw`flex-row justify-between`,styles.toggler, {backgroundColor: Colors[colorScheme].backgroundOpac}]}>
            <TouchableOpacity style={[tw`px-3 py-2 w-1/2`, selected == "all"? styles.itemActive: null, , {alignItems: 'center'} ]} onPress={() => logType('all')}>
              <Text style={{color: selected == "all"? "black": Colors[colorScheme].text}}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[tw`px-3 py-2 w-1/2`, selected !== "all"? styles.itemActive: null, {alignItems: 'center'}]} onPress={() => logType('Missed')}>
              <Text style={{color: selected !== "all"? "black": Colors[colorScheme].text}} >Missed</Text>
            </TouchableOpacity>
          </View>
          <Pressable
              style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
              })}
              onPress={() => navigation.navigate('AddCallModal')}
          >
              <MaterialCommunityIcons
                  name="phone-plus-outline" 
                  size={25}
                  color={Colors.light.tint}
                  style={{fontWeight: 'bold'}}
              />
          </Pressable>
        </View>
      </SafeAreaView>
      
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


export const {logType} = CallScreenHeader;

export default CallScreenHeader;
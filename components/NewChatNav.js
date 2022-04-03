import * as React from 'react';

import { AntDesign, Feather, FontAwesome5, Fontisto, MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View, useColorScheme } from 'react-native';

import Colors from '../constants/Colors';
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'

const NewChatNavs = () => {
  const colorScheme = useColorScheme();
  const navigation = useNavigation();
  return (
    <View style={tw`pl-2 pr-2`}>
      <View style = {tw`mb-2 border-gray-200 border-opacity-30 border-b`}>
        <TouchableOpacity activeOpacity = {.7} 
          style={tw`flex-row justify-between p-1 pt-0 pl-0 `}
        >
          <View style={tw`flex-row justify-between`}>
            <View style={[tw`mr-2 p-3 rounded-full`, {backgroundColor: Colors[colorScheme].backgroundOpac}]}>
              <Feather name='users' size={15} color = {Colors.light.tint} />
            </View>
            <Text style={[tw`text-lg`, {color: Colors.light.tint}]}>New Group</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style = {tw`mb-2 border-gray-200 border-opacity-30 border-b`}>
        <TouchableOpacity activeOpacity = {.7}
          style={tw`flex-row justify-between p-1 pt-0 pl-0`}
          onPress = {() => navigation.navigate("LabelsScreen")}
          >
          <View style={tw`flex-row justify-between`}>
            <View style={[tw`mr-2 p-3 bg-gray-100 rounded-full`, , {backgroundColor: Colors[colorScheme].backgroundOpac}]}>
                <AntDesign name='adduser' size={17} color = {Colors.light.tint} />
              </View>
          <Text style={[tw`text-lg`, {color: Colors.light.tint}]}>New Contact</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewChatNavs;

const styles = StyleSheet.create({
  container: {}
});

import * as React from 'react';

import { Fontisto, MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View, useColorScheme } from 'react-native';

import Colors from '../constants/Colors';
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'

const ChatNavs = () => {
  const colorScheme = useColorScheme();
  const navigation = useNavigation();
  return (
    <View style={tw`pl-2 pr-2`}>
      <View style = {tw`mb-2 border-gray-200 border-opacity-30 border-b`}>
        <TouchableOpacity 
          style={tw`flex-row justify-between p-1 pt-0 pl-0 `}
        >
          <View style={tw`flex-row justify-between`}>
            <View style={[tw`mr-2 p-2 rounded-full`, {backgroundColor: Colors[colorScheme].backgroundOpac}]}>
              <Fontisto name='archive' size={15} color = {Colors.light.tint} />
            </View>
            <Text style={[tw`text-lg`, {color: Colors.light.tint}]}>Archived</Text>
          </View>
          <Text style={[tw`text-lg`, {color: Colors[colorScheme].tabIconDefault}]}>0</Text>
        </TouchableOpacity>
      </View>
      <View style = {tw`mb-2 border-gray-200 border-opacity-30 border-b`}>
        <TouchableOpacity
          style={tw`flex-row justify-between p-1 pt-0 pl-0`}
          onPress = {() => navigation.navigate("LabelsScreen")}
          >
          <View style={tw`flex-row justify-between`}>
            <View style={[tw`mr-2 p-2 bg-gray-100 rounded-full`, , {backgroundColor: Colors[colorScheme].backgroundOpac}]}>
                <MaterialCommunityIcons name='label' size={17} color = {Colors.light.tint} />
              </View>
          <Text style={[tw`text-lg`, {color: Colors.light.tint}]}>Labels</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View  style={tw`flex-row justify-between mb-2 p-1 pt-0 pl-0 border-gray-200 border-opacity-30 border-b`}>
        <TouchableOpacity>
          <Text style={[tw`text-lg`, {color: Colors.light.tint}]}>Broadcast Lists</Text>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => navigation.navigate('NewGroupModal')}
        >
          <Text style={[tw`text-lg`, {color: Colors.light.tint}]}>New Group</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatNavs;

const styles = StyleSheet.create({
  container: {}
});

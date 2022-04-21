import { Feather, Ionicons } from '@expo/vector-icons';
import { Image, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';

import Colors from '../constants/Colors';
import GoBack from '../components/GoBack';
import tw from 'twrnc'
import useColorScheme from '../hooks/useColorScheme';

const  ChatRoomScreenHeader = ({user}) => {
    colorScheme = useColorScheme()
  return (
    <SafeAreaView style={[tw`border-b mb-2`, {borderBottomColor: Colors[colorScheme].backgroundOpac, borderBottomWidth: .3}]}>
      <View style={[tw`mx-2 flex-row justify-between my-2`, styles.container]}>
        <View style = {tw`flex-row justify-between`}>
            <GoBack label = {11} style = {tw`mt-1`} />
            <Image  
              style = {[tw`ml-6`,styles.avatar]}
              source = {{uri: user.avatar}}
            />
            <TouchableOpacity activeOpacity={.7} style = {tw`flex `}>
                <Text style={[tw`font-semibold`, {fontSize: 17}]}>{user.name}</Text>
                <Text style={[tw``, {color: Colors[colorScheme].tabIconDefault, fontSize: 13}]}>5 minutes ago</Text>
            </TouchableOpacity>
        </View>
        <View style = {tw`flex-row  justify-between`}>
            <TouchableOpacity activeOpacity={.7}>
                <Feather name='video' size={24} color = {Colors.light.tint} style = {tw`mx-3 mr-5`}/>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={.7}>
                <Ionicons name='call-outline' size={24} color = {Colors.light.tint} style = {tw`mx-3`} />
            </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 50,
    marginRight: 15,
    backgroundColor: 'gray'
  }

});

export default ChatRoomScreenHeader;
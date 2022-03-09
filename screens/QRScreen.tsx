import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

import Colors from '../constants/Colors';
import QRScreenHeader from '../headers/QRScreenHeader'
import { RootTabScreenProps } from '../types';
import { Text } from '../components/Themed';
import profile from '../data/profile';
import tw from 'twrnc'
import useColorScheme from '../hooks/useColorScheme';

export default function QRScreen({ navigation }: RootTabScreenProps<'QRScreen'>) {
  const colorScheme = useColorScheme();
  
  return (
    <View style={[styles.container, {backgroundColor: Colors[colorScheme].background}]}>
        <QRScreenHeader  />
        <View style = {tw`items-center`}>
        <Image 
            source={{uri: profile.imageUri}}
            style = {styles.avatar}                    
          />
          <View style = {tw`w-90 items-center py-5  h-90 rounded-xl mt-28 ${colorScheme == 'light'? 'bg-gray-200': 'bg-gray-800'}`}>
    	        <Text style={tw`font-bold text-xl my-2`}>{profile.name}</Text>
              <Text style={tw` text-gray-500 text-sm`}>WhatsApp Business Account</Text>
              <View style ={tw`p-4 bg-white rounded-lg mt-5`}>
                <Image 
                    source={{uri: "https://twilio-cms-prod.s3.amazonaws.com/images/sample_whatsapp_qr_code.width-800.png"}}
                    style = {[tw`rounded-lg`,{width: 200, height: 200}]}                    
                  />
              </View>
          </View>
        </View>
        <View style={tw`py-5 px-3`}>
          <Text style={tw`text-gray-400 text-sm text-center`}>
            You customer can scan this code to start a WhatsApp chat with you.
            <Text style={[{color: Colors.light.tint}]}>  Learn more</Text>
          </Text>
        </View>
        <TouchableOpacity style={tw`w-100 items-center font-bold`}>
            <Text style={tw`font-bold my-4 text-[${Colors.light.tint}]`}>Reset</Text>
        </TouchableOpacity>
        <View style = {tw`p-3`}>
          <TouchableOpacity>
              <Text>SCAN</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    minHeight: 800,
    flex: 1
    
  },    
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginRight: 15,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: "#ccc",
    position: 'absolute',
    top: 60,
    zIndex: 999,
}

});

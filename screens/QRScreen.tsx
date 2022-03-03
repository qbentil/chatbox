import { StyleSheet,  View, Image } from 'react-native';
import { Text } from '../components/Themed';
import profile from '../data/profile';
import Colors from '../constants/Colors';
import QRScreenHeader from '../headers/QRScreenHeader'
import { RootTabScreenProps } from '../types';
import tw from 'twrnc'
import useColorScheme from '../hooks/useColorScheme';

export default function QRScreen({ navigation }: RootTabScreenProps<'Labels'>) {
  const colorScheme = useColorScheme();
  
  return (
    <View style={[styles.container, {backgroundColor: Colors[colorScheme].background}]}>
        <QRScreenHeader  />
        <View style = {tw`flex-1  items-center`}>
        <Image 
            source={{uri: profile.imageUri}}
            style = {styles.avatar}                    
          />
          <View style = {tw`w-90 absolute items-center py-5  h-90 rounded-xl mt-32 ${colorScheme == 'light'? 'bg-gray-200': 'bg-gray-800'}`}>
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
    top: 70,
    zIndex: 999,
}

});

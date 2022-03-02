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
          <View style = {tw`w-90 h-90 rounded-xl mt-32 ${colorScheme == 'light'? 'bg-gray-200': 'bg-[#0D0D0D]'}`}>
    	        <Text>{profile.name}</Text>
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
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 15,
    backgroundColor: 'white',
    // padding: 25
    
}

});

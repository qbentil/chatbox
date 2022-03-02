import { SafeAreaView, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

import Colors from '../constants/Colors';
import tw from 'twrnc'
import useColorScheme from '../hooks/useColorScheme';
import GoBack from '../components/GoBack';

const  QRScreenHeader = (props) => {
    colorScheme = useColorScheme()
  return (
    <SafeAreaView style={[tw`border-b mb-2`, {borderBottomColor: Colors[colorScheme].backgroundOpac}]}>
      <View style={tw`mx-2 flex-row justify-between my-2`}>
        <GoBack label = {'Settings'}/>
        <Text style={tw`font-semibold text-lg`}>QR Code</Text>
        <Text style={[tw`mx-5 text-lg`, {color: Colors.light.tint}]}>Scan</Text>
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bgTransparent: {
    backgroundColor: 'transparent',
    opacity: 1
  },

});

export default QRScreenHeader;
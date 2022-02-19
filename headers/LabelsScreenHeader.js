import { Feather, Ionicons } from '@expo/vector-icons';
import { Pressable, SafeAreaView, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

import Colors from '../constants/Colors';
import Styles from '../constants/Styles';
import tw from 'twrnc'
import useColorScheme from '../hooks/useColorScheme';
import { useNavigation } from '@react-navigation/native';

const  ChatScreenHeader = (props) => {
    colorScheme = useColorScheme()
    const navigation = useNavigation()
  return (
    <SafeAreaView style={[tw`border-b mb-2`, {borderBottomColor: Colors[colorScheme].backgroundOpac}]}>
      <View style={tw`mx-2 flex-row justify-between my-2`}>
      <Pressable
            style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
            })}
            onPress={() => navigation.goBack()}
        >
            <Ionicons
                name="chevron-back-sharp" 
                size={30}
                color={Colors.light.tint}
                style={tw`font-bold`}
            />
        </Pressable>
        <Text style={tw`font-semibold text-lg`}>Labels</Text>
        <Text style={tw`mx-5 font-semibold text-lg`}></Text>
        
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

export default ChatScreenHeader;
import { Feather, Ionicons } from '@expo/vector-icons';
import { Pressable, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';

import Colors from '../constants/Colors';
import tw from 'twrnc'
import useColorScheme from '../hooks/useColorScheme';
import { useNavigation } from '@react-navigation/native';
import GoBack from '../components/GoBack';

const  AddLabelScreenHeader = (props) => {
    colorScheme = useColorScheme()
    const navigation = useNavigation()
  return (
    <SafeAreaView style={[tw`border-b mb-2`, {borderBottomColor: Colors[colorScheme].backgroundOpac}]}>
      <View style={tw`mx-2 flex-row justify-between my-2`}>
        <GoBack showIcon = {false} label = {'Cancel'} />
        <Text style={tw`font-semibold text-lg`}>Add New Label</Text>
        <TouchableOpacity activeOpacity={.7} disabled={props.enableSave? false: true}>
          <Text style={[tw`text-lg`, {color: props.enableSave? 'white': 'grey'}]}>Save</Text>
        </TouchableOpacity>
        
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

export default AddLabelScreenHeader;
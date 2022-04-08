import { ScrollView, StyleSheet, TextInput } from 'react-native';
import { Text, View } from '../components/Themed';

import AddLabel from '../components/addLabel';
import AddLabelScreenHeader from '../headers/AddLabelScreenHeader';
import Colors from '../constants/Colors';
import PrivacyItem from '../components/Status/PrivacyItem';
import { RootTabScreenProps } from '../types';
import tw from 'twrnc'
import useColorScheme from '../hooks/useColorScheme';

export default function StatusPrivacy({ navigation }: RootTabScreenProps<'AddLabel'>) {
  const colorScheme = useColorScheme();
  
  return (
    <View style={[styles.container, {backgroundColor: Colors[colorScheme].background}]}>
      <View style = {tw`my-3 mt-8`}>
        <Text style = {tw`uppercase text-lg font-semibold text-[#ccc]`}>WHo will see my updates</Text>
      </View>
        <PrivacyItem showIcon desc = {'Share with all of your contacts'} title = {'Starred Messages'} />
        <PrivacyItem children title = {'My Contacts Excepts...'} desc = {'2 contacts excluded'} />
        <PrivacyItem children title = {'Only Share With...'} desc = {'Only share with selected contacts'} />
        
        <View style = {tw`px-3 mt-5`}>
          <Text style ={tw`text-[#ccc]`}>Changes to your privacy settings won't affect status updates that you've sent already</Text>
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

});

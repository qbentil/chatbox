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
        <Text style = {tw`uppercase text-lg font-semibold text-[${Colors[colorScheme].backgroundOpac}]`}>WHo will see my updates</Text>
      </View>
        <PrivacyItem showIcon iconBgColor={'#FFB72B'} iconName = {'star'} title = {'Starred Messages'} />
        
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

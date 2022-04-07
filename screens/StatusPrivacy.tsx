import { ScrollView, StyleSheet, TextInput } from 'react-native';
import { Text, View } from '../components/Themed';

import AddLabel from '../components/addLabel';
import AddLabelScreenHeader from '../headers/AddLabelScreenHeader';
import Colors from '../constants/Colors';
import { RootTabScreenProps } from '../types';
import tw from 'twrnc'
import useColorScheme from '../hooks/useColorScheme';

export default function StatusPrivacy({ navigation }: RootTabScreenProps<'AddLabel'>) {
  const colorScheme = useColorScheme();
  
  return (
    <View style={[styles.container, {backgroundColor: Colors[colorScheme].background}]}>
        <AddLabelScreenHeader enableSave = {false}  />
        <AddLabel />
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

import { ScrollView, StyleSheet, TextInput } from 'react-native';
import { Text, View } from '../components/Themed';

import Colors from '../constants/Colors';
import { RootTabScreenProps } from '../types';
import tw from 'twrnc'
import useColorScheme from '../hooks/useColorScheme';
import AddLabelScreenHeader from '../headers/AddLabelScreenHeader';
import AddLabel from '../components/addLabel';

export default function AddLabelsScreen({ navigation }: RootTabScreenProps<'AddLabel'>) {
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

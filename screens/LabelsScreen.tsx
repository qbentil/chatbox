import { ScrollView, StyleSheet, TextInput } from 'react-native';
import { Text, View } from '../components/Themed';

import Colors from '../constants/Colors';
import LabelList from '../components/LabelList';
import LabelsScreenHeader from '../headers/LabelsScreenHeader'
import { RootTabScreenProps } from '../types';
import tw from 'twrnc'
import useColorScheme from '../hooks/useColorScheme';

export default function LabelsScreen({ navigation }: RootTabScreenProps<'Labels'>) {
  const colorScheme = useColorScheme();
  
  return (
    <View style={[styles.container, {backgroundColor: Colors[colorScheme].background}]}>
        <LabelsScreenHeader  />
        <ScrollView  
          nestedScrollEnabled
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
        <LabelList />
        </ScrollView>
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

import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { Pressable, SafeAreaView, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

import Colors from '../constants/Colors';
import Styles from '../constants/Styles';
import { style } from '../components/addLabel/style';
import tw from 'twrnc'
import useColorScheme from '../hooks/useColorScheme';
import { useNavigation } from '@react-navigation/native';

const  CallScreenHeader = (props) => {
    colorScheme = useColorScheme()
    const navigation = useNavigation()
  return (
    <SafeAreaView >
      <View style={[tw`mx-0 flex-row justify-between my-2`]}>
        <Text style = {Styles.headerTitle} >Edit</Text>
        <View style = {[tw`flex-row justify-between`,styles.toggler, {backgroundColor: Colors[colorScheme].backgroundOpac}]}>
          <Text style={[tw`px-5 py-2 w-1/2 pr-3 rounded-full`, ]}>All</Text>
          <Text style={tw`px-5 py-2 w-1/2 pl-2`}>Missed</Text>
        </View>
        <Pressable
            style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
            })}
            onPress={() => navigation.navigate('AddCallModal')}
        >
            <MaterialCommunityIcons
                name="phone-plus-outline" 
                size={25}
                color={Colors.light.tint}
                style={{fontWeight: 'bold'}}
            />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bgTransparent: {
    backgroundColor: 'transparent',
    opacity: 1
  },
  toggler: {
    borderRadius: 8,
    width: 150
  },
  item: {
    backgroundColor: 'white',
    borderRadius: 8
  }

});

export default CallScreenHeader;
import { Pressable, SafeAreaView, StyleSheet, View } from 'react-native';

import Styles from '../constants/Styles';
import { Text } from '../components/Themed';
import tw from 'twrnc'
import useColorScheme from '../hooks/useColorScheme';

const  SettingsScreenHeader = (props) => {
    colorScheme = useColorScheme()
  return (
    <SafeAreaView >
      <View style={[tw`mx-2  flex-row justify-between my-2`, props.showTitle? styles.bgTransparent: null]}>
      <Text style = {Styles.headerTitle} ></Text>
        {props.showTitle? <Text style={tw`font-semibold text-lg`}>Settings</Text>: null}
        <Pressable></Pressable>
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

export default SettingsScreenHeader;
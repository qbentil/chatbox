import { Pressable, SafeAreaView, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

import Colors from '../constants/Colors';
import EditScreenInfo from '../components/EditScreenInfo';
import { Feather } from '@expo/vector-icons';
import Styles from '../constants/Styles';
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native';

const  ChatScreenHeader = (props) => {

    const navigation = useNavigation()
  return (
    <SafeAreaView style={tw`mx-2 flex-row justify-between my-2`}>
        <Text style = {Styles.headerTitle} >Edit</Text>
        {props.showTitle? <Text style={tw`font-semibold text-lg`}>WA Businnes</Text>: null}
        <Pressable
            style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
            })}
            onPress={() => navigation.navigate('Modal')}
        >
            <Feather
                name="edit" 
                size={22}
                color={Colors.light.tint}
                style={{fontWeight: 'bold'}}
            />
        </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

});

export default ChatScreenHeader;
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Text, View } from './Themed';

import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import Styles from '../constants/Styles';
import tw from 'twrnc'
import useColorScheme from '../hooks/useColorScheme';

const SearchBar = (props) =>{
    const colorScheme = useColorScheme();
    return (
        <View style={[Styles.searchBar.container, {backgroundColor: Colors[colorScheme].backgroundOpac}]}>
        <Ionicons name='search' size={22} color = {Colors[colorScheme].tabIconDefault} />
        <TextInput
            style={[tw``, Styles.searchBar.input]}
            placeholder="Search"
            onChangeText={(searchString) => {console.log(searchString)}}
            underlineColorAndroid="transparent"
            placeholderTextColor={Colors[colorScheme].tabIconDefault}
        />
    </View>
    );
}

export default SearchBar;
const styles = StyleSheet.create({
    searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 10,
    opacity: 0.3,
    padding: 5,
    paddingHorizontal: 10,
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        flex: 1,
        paddingVertical: 8,
        paddingLeft: 10,
        color: Colors.dark.text,
        fontSize: 17,
        fontWeight: '400',
    },
});

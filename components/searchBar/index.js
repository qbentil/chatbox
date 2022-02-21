import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Text, View } from '../Themed';

import Colors from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import Style from './Style';
import tw from 'twrnc'
import useColorScheme from '../../hooks/useColorScheme';

const SearchBar = (props) =>{
    const colorScheme = useColorScheme();
    return (
        <View style={[Style.container, {backgroundColor: Colors[colorScheme].backgroundOpac}]}>
            <Ionicons name='search' size={22} color = {Colors[colorScheme].tabIconDefault} />
            <TextInput
                style={[tw`flex-1 py-1 pl-2`, Style.input, {color: Colors[colorScheme].text}]}
                placeholder="Search"
                onChangeText={(searchString) => {console.log(searchString)}}
                underlineColorAndroid="transparent"
                placeholderTextColor={Colors[colorScheme].tabIconDefault}
                returnKeyType = {'search'}
            />
        </View>
    );
}

export default SearchBar;


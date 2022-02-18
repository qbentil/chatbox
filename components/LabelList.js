import {FlatList, ScrollView} from 'react-native';

import LabelListItem from './labelListItem';
import Labels from '../data/Labels';
import { View } from './Themed';
import tw from 'twrnc'
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
const LabelList = () => {
    const colorScheme = useColorScheme()
    return (

        <FlatList 
            nestedScrollEnabled = {true}
            data={Labels}
            style={[tw``,{width: "100%"}]}
            keyExtractor = {(item) => item.id}
            renderItem = {({item}) => (
               <LabelListItem label = {item} /> 
            )}
            ItemSeparatorComponent = {() => (
                <View style = {[tw`border-b`, {borderBottomColor: Colors[colorScheme].backgroundOpac}]}></View>
            )}
        />

    );

}

export default LabelList;
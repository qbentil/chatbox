import { AntDesign, Fontisto, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity, View } from 'react-native';

import Colors from '../../constants/Colors';
import React from 'react';
import { Text } from '../Themed';
import tw from 'twrnc'
import useColorScheme from '../../hooks/useColorScheme';
import { useNavigation } from '@react-navigation/native';

const PrivacyItem = ({title, desc, children = false, showIcon = false, style = {}}) => {
    const colorScheme = useColorScheme()
    const navigation = useNavigation()
    return (
        <TouchableOpacity activeOpacity={.7} style = {[tw`flex-row justify-between items-center  py-3 px-2 border-t border-b`, {borderColor: Colors[colorScheme].backgroundOpac, borderTopWidth: 0.3, borderBottomWidth: 0.3, backgroundColor: colorScheme == 'light'? '#fff': '#0F0E0E'}]}>
            <View style = {tw`flex-row justify-between items-center`}>
                <View style={[tw`w-8 p-1  rounded-lg`]}>
                    {showIcon && <AntDesign name='check' color={Colors.light.tint} style = {tw`text-3xl font-bold`} />}
                </View>
                <View style = {tw``}>
                    <Text numberOfLines={2} ellipsizeMode = {'tail'}  style = {tw`font-semibold text-lg mx-3`}>{title}</Text>
                    <Text style = {tw`text-[${Colors[colorScheme].tabIconDefault}]  mx-3`}>{desc}</Text>
                </View>
            </View>
            {children && <AntDesign name="right" size={24} color={Colors[colorScheme].tabIconDefault} />}
        </TouchableOpacity>
    )
}

export default PrivacyItem;

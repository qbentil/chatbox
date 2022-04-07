import { Image, TouchableOpacity, View } from 'react-native';
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import Colors from '../../constants/Colors';
import React from 'react';
import { Text } from '../Themed';
import profile from '../../data/profile';
import { styles } from './style';
import tw from 'twrnc'
import useColorScheme from '../../hooks/useColorScheme';
import { useNavigation } from '@react-navigation/native';

const StatusProfile = () => {
    const colorScheme = useColorScheme()
    const navigation = useNavigation()
    return (
        <View style = {[tw`flex-row justify-between items-center my-3 py-4 px-2 border-t border-b`, {borderColor: Colors[colorScheme].backgroundOpac, borderTopWidth: 0.3, borderBottomWidth: 0.3, backgroundColor: colorScheme == 'light'? '#fff': '#0F0E0E'}]}>
            <View style = {tw`flex-row justify-between items-center`}>
                <Image 
                    source={{uri: profile.imageUri}}
                    style = {styles.avatar}
                />
                <View>
                    <Text numberOfLines={2} ellipsizeMode = {'tail'}  style = {styles.username}>{'My Status'}</Text>
                    <Text numberOfLines={1} ellipsizeMode = {'tail'}  style = {styles.status}>{'Add to my status'}</Text>
                </View>
            </View>
            <View style = {tw`flex-row justify-between items-center`}>
                <TouchableOpacity 
                    activeOpacity={.7} 
                    style = {[tw`flex items-center mx-3`, styles.icon, {backgroundColor: Colors[colorScheme].backgroundOpac}]}
                    onPress = {() => navigation.navigate("QRScan")}
                >
                    <Ionicons name="camera" style = {tw`mt-2`} size={24} color={Colors.light.tint} />
                </TouchableOpacity>
                
                <TouchableOpacity 
                    activeOpacity={.7} 
                    style = {[tw`flex items-center mx-3`, styles.icon, {backgroundColor: Colors[colorScheme].backgroundOpac}]}
                    onPress = {() => navigation.navigate("QRScan")}
                >
                    <MaterialIcons name="edit" style = {tw`mt-2`} size={24} color={Colors.light.tint} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default StatusProfile;

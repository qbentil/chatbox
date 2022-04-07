import * as React from 'react';

import { ColorSchemeName, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';

import AddLabelsScreen from '../screens/AddLabelScreen';
import BottomTabNavigator from './MainTabNavigator';
import ChatRoomScreen from '../screens/ChatRoomScreen';
import Colors from '../constants/Colors';
import LabelsScreen from '../screens/LabelsScreen';
import LinkingConfiguration from './LinkingConfiguration';
import NewChatModalScreen from '../screens/NewChatModalScreen';
import NewGroupModalScreen from '../screens/NewGroupModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import QRScreen from '../screens/QRScreen';
import StatusPrivacy from '../screens/StatusPrivacy';
import Styles from '../constants/Styles';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import tw from 'twrnc'
import useColorScheme from '../hooks/useColorScheme';

/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */








export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
      >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const colorScheme = useColorScheme();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors[colorScheme].background,
        },
        headerTintColor: Colors.light.tint,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerShadowVisible: false
      }}
    >
      <Stack.Screen 
        name="Root" 
        component={BottomTabNavigator} 
        options={({ navigation }) => ({ 
          headerShown: false,
          title: "",
          headerLeft: () => (
            <Text style = {Styles.headerTitle} >Edit</Text>
          ),
          headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate('Modal')}
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                })}>
                <Feather 
                name="edit" 
                size={22}
                color={Colors.light.tint}
                style={{fontWeight: 'bold'}}
                />
              </Pressable>
          ),
          })} 
      />
        <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
        <Stack.Screen name="LabelsScreen" component={LabelsScreen} options={{ title: 'Labels!', headerShown: false }} />
        <Stack.Screen name="AddLabel" component={AddLabelsScreen} options={{ title: 'Labels!', headerShown: false }} />
        <Stack.Screen name="StatusPrivacy" component={StatusPrivacy} options={{ title: 'Status Privacy', headerShown: true }} />
        <Stack.Screen name="ChatRoom" component={ChatRoomScreen}  options={{ headerShown: false}} />
        <Stack.Screen name="QRScan" component={QRScreen}  options={{ headerShown: false}} />

        {/* Modal Screens */}
        <Stack.Group 
          screenOptions={({navigation}) => ({
            presentation: 'modal',
            headerStyle: {
              backgroundColor: colorScheme == 'light'? 'white':'#333333'
            },
            headerTitleStyle: {
              color: Colors[colorScheme].text,
              fontSize: 22,
              fontWeight: 'bold',
              
            },
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={[tw`p-1 w-8 h-8 rounded-full shadow-md ${colorScheme ==='light'? 'bg-[#c5c6d0]':'bg-[#555555]'}`]}
                >
                  <Ionicons 
                  name="close" 
                  size={24}
                  // color={}
                  style={[tw`${colorScheme == 'light'? 'text-gray-900': 'text-gray-200'} font-bold`]}
                  />
                </TouchableOpacity>
            ),
          })}
        >
          <Stack.Screen name="Modal" component={NewChatModalScreen} options={{ title: 'New Chat'}}/>
          <Stack.Screen name="AddCallModal" component={NewChatModalScreen} />
          <Stack.Screen name="NewGroupModal" component={NewGroupModalScreen} />
        </Stack.Group>
    </Stack.Navigator>
  );
}

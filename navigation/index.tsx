import * as React from 'react';

import { ColorSchemeName, Pressable, StyleSheet, Text, View } from 'react-native';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';

import AddLabelsScreen from '../screens/AddLabelScreen';
import BottomTabNavigator from './MainTabNavigator';
import ChatRoomScreen from '../screens/ChatRoomScreen';
import Colors from '../constants/Colors';
import LabelsScreen from '../screens/LabelsScreen';
import LinkingConfiguration from './LinkingConfiguration';
import ModalScreen from '../screens/ModalScreen';
import NewGroupModalScreen from '../screens/NewGroupModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import Styles from '../constants/Styles';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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
        <Stack.Screen name="ChatRoom" component={ChatRoomScreen}  options={{ headerShown: false}} />

        {/* Modal Screens */}
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen name="Modal" component={ModalScreen} />
          <Stack.Screen name="AddCallModal" component={ModalScreen} />
          <Stack.Screen name="NewGroupModal" component={NewGroupModalScreen} />
        </Stack.Group>
    </Stack.Navigator>
  );
}

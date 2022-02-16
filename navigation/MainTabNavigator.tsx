import * as React from 'react';

import { ColorSchemeName, Pressable, StyleSheet, Text, View } from 'react-native';
import { Fontisto, Ionicons, SimpleLineIcons, Zocial } from '@expo/vector-icons';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';

import CallsScreen from '../screens/CallsScreen';
import CameraScreen from '../screens/CameraScreen';
import ChatScreen from '../screens/ChatScreen';
import Colors from '../constants/Colors';
import SettingsScreen from '../screens/SettingsScreen';
import StatusScreen from '../screens/StatusScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import useColorScheme from '../hooks/useColorScheme';

// import { createStackNavigator } from '@react-navigation/stack';



const BottomTab = createBottomTabNavigator<RootTabParamList>();
  
export default function BottomTabNavigator() {
    const colorScheme = useColorScheme();
  
    return (
      <BottomTab.Navigator
        initialRouteName="Chats"
        screenOptions={{
          tabBarActiveTintColor: Colors.light.tint,
          headerShown: false,
        }}>
        <BottomTab.Screen
          name="Status"
          component={StatusScreen}
          options={{
            title: 'Status',
            tabBarIcon: ({ color }) => <Fontisto size={25} style={{ marginBottom: -3 }} name="circle-o-notch" color={color} />,
          }}
        />
        <BottomTab.Screen
          name="Calls"
          component={CallsScreen}
          options={{
            title: 'Calls',
            tabBarIcon: ({ color }) => <Ionicons size={25} style={{ marginBottom: -3 }} name="md-call-outline" color={color} />,
          }}
        />
        <BottomTab.Screen
          name="Camera"
          component={CameraScreen}
          options={{
            title: 'Camera',
            tabBarIcon: ({ color }) => <SimpleLineIcons size={25} style={{ marginBottom: -3 }} name="camera" color={color} />,
          }}
        />
        <BottomTab.Screen
          name="Chats"
          component={ChatScreen}
          options={{
            title: 'Chats',
            tabBarBadge: 11,
            tabBarIcon: ({ color }) => <Ionicons size={25} style={{ marginBottom: -3 }} name="ios-chatbubbles-sharp" color={color} />,
          }}
        />
        <BottomTab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            title: 'Settings',
            tabBarIcon: ({ color }) => <SimpleLineIcons size={30} style={{ marginBottom: -3 }} name="settings" color={color} />,
          }}
        />
      </BottomTab.Navigator>
    );
  }
  
  /**
   * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
   */
  function TabBarIcon(props: {
    type: string;
    name: React.ComponentProps<typeof Ionicons>['name'];
    color: string;
  }) {
    return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
  }

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const CameraStack = createStackNavigator<RootStackParamList>();
const ChatStack= createStackNavigator<RootStackParamList>();
const SettingStack = createStackNavigator<RootStackParamList>();
const StatusStack= createStackNavigator<RootStackParamList>();
const CallsStack = createStackNavigator<RootStackParamList>();

function CameraScreenNavigator() {
  return (
    <CameraStack.Navigator>
      <CameraStack.Screen
        name="Camera"
        component={CameraScreen}
        options={{ headerTitle: 'Tab One Title' }}
      />
    </CameraStack.Navigator>
  );
}

// const TabTwoStack = createStackNavigator<RootStackParamList>();

function ChatScreenNavigator() {
  return (
    <ChatStack.Navigator>
      <ChatStack.Screen
        name="Chats"
        component={ChatScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </ChatStack.Navigator>
  );
}
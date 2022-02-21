/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  NewGroupModal: undefined;
  AddCallModal: undefined;
  Modal: undefined;
  NotFound: undefined;
  LabelsScreen: undefined;
  AddLabel: undefined;
  ChatRoom: {
    id: string,
    name: string,
    imageUri: string
  };

};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  Camera: undefined;
  Chats: undefined;
  Settings: undefined;
  Status: undefined;
  Calls: undefined;
  AddLabel: undefined;
  Labels: undefined;
};

export type ChatRoom = {
  id: string;
  users: user[];
  lastMessage: Message;
}

export type Call = {
  id: string,
  mode: string,
  type: string,
  user: user,
  date: string
}

export type CallLog = {
  calls : Call[]
}

export type user = {
  id: string;
  name: string;
  imageUri: string;
}

export type Message = {
  id: string;
  content: string;
  createdAt: string;
}

export type Label = {
  id: string;
  title: string;
  color: string;
  users: user[]
}

export type chatMessageProps = {
  message: Message
}

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

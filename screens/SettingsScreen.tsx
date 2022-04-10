import { ScrollView, StyleSheet, View, useColorScheme } from 'react-native';

import Profile from '../components/Settings/profile';
import Seperator from '../components/Settings/Seperator';
import Settingitem from '../components/Settings/Item';
import SettingsScreenHeader from '../headers/SettingsScreenHeader'
import { Text, } from '../components/Themed';
import { useState } from 'react';

export default function SettingsScreen() {
  const [titleShown, setTitleShown] = useState(false)
  const colorScheme = useColorScheme()

  const handleScroll = function(event: Object) {
    event.nativeEvent.contentOffset.y <= 0 ? setTitleShown(false): setTitleShown(true)
  }
  return (
    <View style={[styles.container]}>
      <SettingsScreenHeader showTitle = {titleShown} />
      <ScrollView  
          onScroll={handleScroll} 
          scrollEventThrottle = {1}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          nestedScrollEnabled
        >
           {!titleShown &&  <Text style = {[styles.title]}>Settings</Text>}
          {/* User Profile */}
          <Profile />
          <Seperator />
          <Settingitem iconBgColor={'#5D8BF4'} iconName = {'add-business'} title = {'Business Tools'}/>
          <Seperator />
          <Settingitem iconBgColor={'#FFB72B'} iconName = {'star'} title = {'Starred Messages'} />
          <Settingitem iconBgColor={'#219F94'} iconName = {'laptop-mac'} title = {'Linked Devices'} />
          <Seperator />
          <Settingitem iconType='MCI' iconBgColor={'#2D31FA'} iconName = {'key-variant'} style = {{transform: [{ rotate: '45deg'}]}} title = {'Accounts'} />
          <Settingitem iconType='MCI' iconBgColor={'#8BDB81'} iconName = {'whatsapp'} title = {'Chats'} />
          <Settingitem iconType='MCI' iconBgColor={'#D82148'} iconName = {'bell-outline'} title = {'Notifications'} />
          <Settingitem 
            iconType='F' 
            iconBgColor={'#6ECB63'} 
            iconName = {'arrow-swap'} 
            title = {'Storage and Data'} 
            style = {{transform: [{ rotate: '90deg'}]}}
          />
          <Seperator />
          <Settingitem 
            iconType='AD' 
            iconBgColor={'#5902EC'} 
            iconName = {'info'} 
            title = {'Help'} 
          />
          <Settingitem 
            iconType='AD' 
            iconBgColor={'#E60965'} 
            iconName = {'heart'} 
            title = {'Tell a Friend'} 
          />
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
    minHeight: 800,
    flex: 1
  },
  title: {
    fontSize: 35,
    fontWeight: '600',
    paddingHorizontal: 10
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

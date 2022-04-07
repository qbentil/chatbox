import { Text, View } from '../components/Themed';

import EditScreenInfo from '../components/EditScreenInfo';
import { StyleSheet } from 'react-native';

export default function StatusScreen() {
  return (
    <View style={styles.container}>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

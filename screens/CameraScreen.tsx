import { Text, View } from '../components/Themed';

import EditScreenInfo from '../components/EditScreenInfo';
import { RootTabScreenProps } from '../types';
import { StyleSheet } from 'react-native';

export default function CameraScreen({ navigation }: RootTabScreenProps<'Camera'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Camera Tab</Text>
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

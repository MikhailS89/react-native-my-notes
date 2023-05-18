import { StyleSheet, View } from 'react-native';
import Navigate from './navigate';

export default function App() {
  return (
    <View style={styles.home}>
      <Navigate />
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1
  }
});

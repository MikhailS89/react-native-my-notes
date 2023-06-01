import { StyleSheet, View } from 'react-native';
import Router from './router/routers';

export default function App() {
  return (
    <View style={styles.home}>
      <Router />
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1
  }
});

import { StyleSheet, View } from 'react-native';
import { Provider as StateProvider } from 'react-redux';
import store from './redux/store';
import Router from './router/routers';

export default function App() {
  return (
    <View style={styles.home}>
      <StateProvider store={store}>
        <Router />
      </StateProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1
  }
});

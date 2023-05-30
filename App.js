import { StyleSheet, View } from 'react-native';
import Router from './router/routers';
// import Search from './components/Search';
// import Footer from './components/Footer';
// import Header from './components/Header';
// import List from './components/List';

export default function App() {
  return (
    <View style={styles.home}>
      {/* <Search />
      <Footer />
      <List />
      <Header /> */}
      <Router />
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1
  }
});

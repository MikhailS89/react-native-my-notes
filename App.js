import { Provider as StateProvider } from 'react-redux';
import store from './redux/store';
import Router from './router/routers';

export default function App() {
  return (
    <StateProvider store={store}>
      <Router />
    </StateProvider>
  );
}

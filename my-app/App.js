import Router from "./Screens";
import { Provider } from 'react-redux';
import Store from "./Redux/Store";

export default function App() {
  return (
    <Provider store={Store}>
    <Router />
  </Provider>
  );
}


import { Provider } from "react-redux";

import LandingPage from "./containers/landing_page/LandingPage";
import logo from "./logo.svg";

import "./App.css";

import { store } from './Store'

function App() {
  return (
    <Provider store={store} data-test="app-component">
      <LandingPage />
    </Provider>
  );
}

export default App;

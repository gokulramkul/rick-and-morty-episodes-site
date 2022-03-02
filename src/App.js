import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import { store } from "./Store";

import "./App.css";
import LandingPage from "./containers/landing_page/LandingPage";
import routes from "./hoc/Route";


function App() {
  return (
    <Provider store={store} data-test="app-component">
      <Router>
        {routes()}
        <LandingPage />
      </Router>
    </Provider>
  );
}

export default App;

import { Provider } from "react-redux";
import { HashRouter as Router } from "react-router-dom";

import { store } from "./Store";
import routes from "./hoc/Route";
import LandingPage from "./containers/landing_page/LandingPage";

import "./App.scss";

function App() {
  return (
    <Provider store={store} data-test="app-component">
      <Router>
        <LandingPage />
        {routes()}
      </Router>
    </Provider>
  );
}

export default App;

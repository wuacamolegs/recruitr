import React from "react";
import { Provider } from "react-redux";
import PropTypes from "prop-types";
import { ConnectedRouter } from "connected-react-router";
import { ThemeProvider } from "@increase/typed-components";

import routes from "./Routes";

const App = ({ history, store }) => (
  <Provider store={store}>
    <ThemeProvider>
      <ConnectedRouter history={history}>{routes}</ConnectedRouter>
    </ThemeProvider>
  </Provider>
);

App.propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

export default App;

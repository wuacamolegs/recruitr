import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Provider as AuthenticationProvider } from "./AuthenticationContext";
import PrivateRoute from "./PrivateRoute";
import Positions from "./components/Positions";

const routes = (
  <AuthenticationProvider>
    <Switch>
      <PrivateRoute component={Positions} exact path="/" />
    </Switch>
  </AuthenticationProvider>
);
export default routes;

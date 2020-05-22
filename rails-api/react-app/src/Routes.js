import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Provider as AuthenticationProvider } from "./AuthenticationContext";
import PrivateRoute from "./PrivateRoute";
import Positions from "./components/Positions";
import Applications from "./components/Applications";

const routes = (
  <AuthenticationProvider>
    <Switch>
      <PrivateRoute component={Positions} exact path="/" />
      <PrivateRoute
        component={Positions}
        exact
        path="/positions/:position_id"
      />
      <PrivateRoute
        component={Applications}
        exact
        path="/positions/:position_id/applications"
      />
    </Switch>
  </AuthenticationProvider>
);
export default routes;

import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Reports from "./components/App";

const routes = (
  <Switch>
    <Route component={App} exact path="/welcome" />
    <Redirect exact from="/" to="/welcome" />
  </Switch>
);
export default routes;

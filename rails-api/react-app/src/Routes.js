import React from "react";
import { Switch } from "react-router-dom";
import { Provider as AuthenticationProvider } from "./AuthenticationContext";
import PrivateRoute from "./PrivateRoute";
import Positions from "./components/Positions";
import JobApplications from "./components/JobApplications";
import JobApplication from "./components/JobApplication";

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
        component={JobApplications}
        exact
        path="/positions/:position_id/job_applications"
      />
      <PrivateRoute
        component={JobApplication}
        exact
        path="/job_applications/:job_application_id"
      />
    </Switch>
  </AuthenticationProvider>
);
export default routes;

import PropTypes from "prop-types";
import React from "react";
import { withRouter } from "react-router-dom";

function NavBar({ className, t, match, history }) {
  return <h1>NAVBARRRR</h1>;
}

const propTypes = {
  pathname: PropTypes.string
};

NavBar.propTypes = propTypes;

export default withRouter(NavBar);

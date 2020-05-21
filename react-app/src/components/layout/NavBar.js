import PropTypes from "prop-types";
import React from "react";
import { withRouter, NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

function NavBar({ className, t, match, history }) {
  return (
    <Nav activeKey="/">
      <Nav.Item>
        <Nav.Link>
          <NavLink to="/">Recruit</NavLink>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>
          <NavLink to="/">Positions</NavLink>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>
          <NavLink to="/applicants">Applicants</NavLink>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>
          <NavLink to="/hiring_team">Hiring Team</NavLink>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          LogIn
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

const propTypes = {
  pathname: PropTypes.string
};

NavBar.propTypes = propTypes;

export default withRouter(NavBar);

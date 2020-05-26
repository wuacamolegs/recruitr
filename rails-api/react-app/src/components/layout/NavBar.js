import PropTypes from "prop-types";
import React from "react";
import { withRouter, NavLink } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

function NavBar({ className, t, match, history }) {
  return (
    <Navbar bg="light">
      <Nav activeKey="/">
        <Nav.Item>
          <Nav.Link>
            <NavLink to="/">
              <strong>Recruit</strong>
            </NavLink>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <NavLink to="/positions">Positions</NavLink>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <NavLink to="/positions/new">New Position</NavLink>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <NavLink to="/recruiters">Recruiters</NavLink>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            LogIn
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
}

const propTypes = {
  pathname: PropTypes.string
};

NavBar.propTypes = propTypes;

export default withRouter(NavBar);

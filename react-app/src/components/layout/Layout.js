import PropTypes from "prop-types";
import React from "react";
import connect from "react-redux/es/connect/connect";
import NavBar from "./NavBar";

function Layout({ children }) {
  return (
    <React.Fragment>
      <NavBar />
      {children}
    </React.Fragment>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element.isRequired, PropTypes.array])
};

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Layout);

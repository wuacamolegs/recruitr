import PropTypes from "prop-types";
import React from "react";
import connect from "react-redux/es/connect/connect";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "./NavBar";

function Layout({ children }) {
  return (
    <React.Fragment>
      <NavBar />
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="10">
            <div style={{ margin: 5 + "em" }}>{children}</div>
          </Col>
        </Row>
      </Container>
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

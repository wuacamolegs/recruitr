import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Jumbotron } from "react-bootstrap";

const RecruitrHome = () => (
  <Jumbotron>
    <h1>Hello! Welcome to Recruitr</h1>
    <p>What do you want to do today?</p>
    <hr />
    <p>
      <strong> New position?</strong>
    </p>
    <p>
      No problem! Just create a <Link to={`/positions/new`}>new position</Link>
    </p>
    <hr />
    <p>
      <strong>New Candidate?</strong>
    </p>
    <p>
      To add a new candidate navigate to the position the applicant is applying
      for. Here is the list of
      <Link to={`/positions`}> all open positions</Link>
    </p>
  </Jumbotron>
);

export default connect(
  () => {},
  () => {}
)(RecruitrHome);

import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { fetchPosition } from "../reducers/positionReducer";
import { fetchJobApplications } from "../reducers/jobApplicationReducer";
import { Card, Badge, Table, Button, Row, Jumbotron } from "react-bootstrap";
import Skills from "./commons/Skills";
import StateBadge from "./commons/StateBadge";

const JobApplicationRow = ({ jobApplication }) => {
  const applicant = jobApplication.applicant;
  return (
    <tr>
      <td>
        <p>{applicant.fullName}</p>
      </td>
      <td>
        <p>{applicant.email}</p>
      </td>
      <td>
        <StateBadge state={jobApplication.state} />
      </td>
      <td>
        <Link to={`/job_applications/${jobApplication.id}`}>
          View Application
        </Link>
      </td>
    </tr>
  );
};

JobApplicationRow.propTypes = {
  application: PropTypes.object
};

const Position = ({ position }) => {
  return (
    <React.Fragment>
      <h3>Position</h3>
      <Jumbotron>
        <h3> {position.title}</h3>
        {position.hiringTeam && <p>Hiring Team: {position.hiringTeam.title}</p>}
        <p>{position.description}</p>
        <h4>Required skills</h4>
        <Skills skills={position.skills} />
      </Jumbotron>
    </React.Fragment>
  );
};

export class JobApplications extends React.Component {
  componentDidMount() {
    const { dispatch, match } = this.props;
    dispatch(fetchPosition(Number(match.params.position_id)));
    dispatch(fetchJobApplications(Number(match.params.position_id)));
  }

  render() {
    const { currentPosition, jobApplications } = this.props;

    if (!currentPosition || !jobApplications) {
      return null;
    }

    return (
      <React.Fragment>
        <div style={{ marginBottom: "4rem" }}>
          <Position position={currentPosition} />
        </div>
        <Row>
          <h4>Job Applications</h4>
          <Button variant="link">
            <Link to={`/positions/${currentPosition.id}/job_applications/new`}>
              New Applicant
            </Link>
          </Button>
        </Row>
        <Table>
          <tbody>
            {jobApplications.map((jobApplication, i) => {
              return (
                <JobApplicationRow key={i} jobApplication={jobApplication} />
              );
            })}
          </tbody>
        </Table>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  dispatch
});

const mapStateToProps = state => {
  const { currentPosition } = state.positions;
  const { jobApplications } = state.jobApplications;
  return {
    currentPosition: currentPosition,
    jobApplications: jobApplications
  };
};

JobApplications.propTypes = {
  jobApplications: PropTypes.arrayOf(PropTypes.object),
  currentPosition: PropTypes.object
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JobApplications);

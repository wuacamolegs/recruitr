import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { fetchPosition } from "../reducers/positionReducer";
import { fetchJobApplications } from "../reducers/jobApplicationReducer";
import { Card, Badge } from "react-bootstrap";

const JobApplication = ({ application }) => {
  const applicant = application.applicant;
  return (
    <Card style={{ width: "40rem", margin: "1rem" }}>
      <Card.Body>
        <Card.Title>
          {applicant.full_name},{" "}
          <Badge variant="light">{application.state}</Badge>
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {applicant.email}
        </Card.Subtitle>
        <Card.Link>
          <Link to={`/job_applications/${application.id}`}>
            View Application
          </Link>
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

JobApplication.propTypes = {
  application: PropTypes.object
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
        <h3>
          Appliations for <strong>{currentPosition.title}</strong>
        </h3>

        {jobApplications.map((application, i) => {
          return <JobApplication key={i} application={application} />;
        })}
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
  currentPosition: PropTypes.object
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JobApplications);

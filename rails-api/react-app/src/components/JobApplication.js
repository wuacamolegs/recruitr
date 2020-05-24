import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { fetchJobApplication } from "../reducers/jobApplicationReducer";
import ScoreCards from "./commons/ScoreCards";
import { Badge } from "react-bootstrap";

export class JobApplication extends React.Component {
  componentDidMount() {
    const { dispatch, match } = this.props;
    dispatch(fetchJobApplication(Number(match.params.job_application_id)));
  }

  viewPosition(event) {
    event.stopPropagation();
    const { position } = this.props.jobApplication;
    this.props.history.push(`/positions/${position.id}`);
  }

  render() {
    const { jobApplication } = this.props;

    if (!jobApplication) {
      return null;
    }

    const { applicant, position } = jobApplication;

    return (
      <React.Fragment>
        <h3>
          {applicant.full_name}
          <Badge variant="light">{jobApplication.state}</Badge>
        </h3>
        <p>
          Applied for{" "}
          <Link onClick={this.viewPosition.bind(this)}>{position.title}</Link>
        </p>
        {jobApplication.state !== "unmatched" && (
          <React.Fragment>
            <h4>Interview Process</h4>
            <ScoreCards scores={jobApplication.score_cards} />
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  dispatch
});

const mapStateToProps = state => {
  const { currentJobApplication } = state.jobApplications;
  return {
    jobApplication: currentJobApplication
  };
};

JobApplication.propTypes = {
  jobApplication: PropTypes.arrayOf(PropTypes.object)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JobApplication);
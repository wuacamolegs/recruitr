import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  fetchJobApplication,
  matchRecruiter
} from "../reducers/jobApplicationReducer";
import { fetchRecruiters } from "../reducers/hiringTeamReducer";
import ScoreCards from "./commons/ScoreCards";
import StateBadge from "./commons/StateBadge";
import MatchRecruiter from "./MatchRecruiter";
import Skills from "./commons/Skills";
import { Badge, Jumbotron } from "react-bootstrap";

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
    const {
      jobApplication,
      recruiters,
      onChangeCriteria,
      onSubmitRecruiter
    } = this.props;

    if (!jobApplication) {
      return null;
    }
    const { applicant, position } = jobApplication;

    return (
      <React.Fragment>
        <p>
          Applied for{" "}
          <Link onClick={this.viewPosition.bind(this)}>{position.title}</Link>{" "}
          {jobApplication.createdAt}
        </p>
        <h3>
          {applicant.fullName} <StateBadge state={jobApplication.state} />
        </h3>
        {jobApplication.state == "unmatched" && (
          <MatchRecruiter
            applicant={applicant}
            position={position}
            recruiters={recruiters}
            onChange={criteria =>
              onChangeCriteria(
                position.hiringTeamId,
                jobApplication.id,
                criteria
              )
            }
            onSubmit={recruiterId =>
              onSubmitRecruiter(jobApplication.id, recruiterId)
            }
          />
        )}
        {jobApplication.state !== "unmatched" && (
          <React.Fragment>
            <Jumbotron>
              <h4>Skills</h4>
              <Skills skills={applicant.skills} />
            </Jumbotron>
            <Jumbotron>
              <h4>Interview Process</h4>
              <p>Recruiter: {jobApplication.recruiter.fullName}</p>
              <ScoreCards scores={jobApplication.scoreCards} />
            </Jumbotron>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  dispatch,
  onChangeCriteria: (hiringTeamId, jobApplicationId, criteria) => {
    dispatch(
      fetchRecruiters(hiringTeamId, {
        jobApplicationId: jobApplicationId,
        criteria: criteria
      })
    );
  },
  onSubmitRecruiter: (jobApplicationId, recruiterId) => {
    dispatch(matchRecruiter(jobApplicationId, recruiterId));
  }
});

const mapStateToProps = state => {
  const { currentJobApplication } = state.jobApplications;
  const { recruiters } = state.hiringTeams;
  return {
    jobApplication: currentJobApplication,
    recruiters: recruiters
  };
};

JobApplication.propTypes = {
  jobApplication: PropTypes.arrayOf(PropTypes.object)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JobApplication);

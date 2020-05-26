import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  fetchJobApplication,
  matchRecruiter,
  updateJobApplication
} from "../reducers/jobApplicationReducer";
import { fetchRecruiters } from "../reducers/hiringTeamReducer";
import ScoreCards from "./commons/ScoreCards";
import StateBadge from "./commons/StateBadge";
import MatchRecruiter from "./MatchRecruiter";
import Skills from "./commons/Skills";
import { Badge, Jumbotron } from "react-bootstrap";

const ApplicantInformation = ({ applicant }) => {
  return (
    <Jumbotron>
      <h4>Applicant Information</h4>
      <p>{applicant.email}</p>
      {applicant.linkedin && <p>Linkedin {applicant.linkedin}</p>}
      {applicant.angelist && <p>AngeList {applicant.angelist}</p>}
      <Skills skills={applicant.skills} />
    </Jumbotron>
  );
};

const ApplicantHeader = ({ applicant, position, jobApplication }) => {
  return (
    <React.Fragment>
      <p>
        Applied for{" "}
        <Link to={`/positions/${position.id}/details`}>{position.title}</Link>{" "}
        {jobApplication.createdAt}
      </p>
      <h3>
        {applicant.fullName} <StateBadge state={jobApplication.state} />
      </h3>
    </React.Fragment>
  );
};

export class JobApplication extends React.Component {
  componentDidMount() {
    const { dispatch, match } = this.props;
    dispatch(fetchJobApplication(Number(match.params.job_application_id)));
  }

  render() {
    const {
      jobApplication,
      recruiters,
      onChangeCriteria,
      onSubmitRecruiter,
      onUpdateJobApplication
    } = this.props;

    if (!jobApplication) {
      return null;
    }
    const { applicant, position } = jobApplication;

    return (
      <React.Fragment>
        <ApplicantHeader
          applicant={applicant}
          position={position}
          jobApplication={jobApplication}
        />
        <ApplicantInformation applicant={applicant} />
        {jobApplication.state == "unmatched" && (
          <Jumbotron>
            <h4>Match a recruiter</h4>
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
          </Jumbotron>
        )}
        {jobApplication.state == "matched" && (
          <Jumbotron>
            <h4>Interview Process</h4>
            <p>Recruiter: {jobApplication.recruiter.fullName}</p>
            <ScoreCards
              scores={jobApplication.scoreCards}
              onSubmit={scoreCards =>
                onUpdateJobApplication(
                  jobApplication.id,
                  "scoreCards",
                  scoreCards
                )
              }
            />
          </Jumbotron>
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
  },
  onUpdateJobApplication: (jobApplicationId, prop, value) => {
    dispatch(updateJobApplication(jobApplicationId, { [prop]: value }));
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
  jobApplication: PropTypes.object
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JobApplication);

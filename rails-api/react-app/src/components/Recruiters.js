import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { fetchAllRecruiters } from "../reducers/hiringTeamReducer";
import { Table, Button, Row } from "react-bootstrap";
import Skills from "./commons/Skills";

const RecruiterRow = ({ recruiter }) => {
  return (
    <tr>
      <td>{recruiter.fullName}</td>
      <td>
        <Skills skills={recruiter.skills} />
      </td>
      <td>{recruiter.team}</td>
    </tr>
  );
};

RecruiterRow.propTypes = {
  recruiter: PropTypes.object
};

export class Recruiters extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchAllRecruiters());
  }

  render() {
    const { recruiters } = this.props;

    return (
      <React.Fragment>
        <h3>Recruiters</h3>
        <Table hover>
          <tbody>
            <th>Recruiter</th>
            <th>Skills</th>
            <th>Team</th>
            {recruiters &&
              recruiters.map((recruiter, i) => {
                return <RecruiterRow key={i} recruiter={recruiter} />;
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
  const { recruiters } = state.hiringTeams;
  return {
    recruiters: recruiters
  };
};

Recruiters.propTypes = {
  recruiters: PropTypes.arrayOf(PropTypes.object)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recruiters);

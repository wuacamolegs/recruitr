import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { fetchHiringTeams } from "../reducers/hiringTeamReducer";

export class CreatePosition extends React.Component {
  componentDidMount() {
    const { dispatch, match } = this.props;
    dispatch(fetchHiringTeams());
  }

  render() {
    const { hiringTeams } = this.props;

    return (
      <React.Fragment>
        <h3>New Position</h3>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  dispatch
});

const mapStateToProps = state => {
  const { hiringTeams } = state.hiringTeams;
  return {
    hiringTeams: hiringTeams
  };
};

CreatePosition.propTypes = {
  hiringTeams: PropTypes.arrayOf(PropTypes.object)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePosition);

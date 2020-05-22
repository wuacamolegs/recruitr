import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { fetchApplications, fetchPosition } from "../reducers/positionReducer";

const ApplicationRow = ({ application }) => {
  return (
    <Link to={`/application/${application.id}`}>
      <p>{application.title}</p>
    </Link>
  );
};

ApplicationRow.propTypes = {
  application: PropTypes.object
};

export class Applications extends React.Component {
  componentDidMount() {
    const { dispatch, match } = this.props;
    dispatch(fetchPosition(Number(match.params.position_id)));
    dispatch(fetchApplications(Number(match.params.position_id)));
  }

  render() {
    const { currentPosition } = this.props;

    if (!currentPosition) {
      return null;
    }
    const applications = currentPosition.applications;
    return (
      <div>
        <h1>
          Appliations for <strong>{currentPosition.title}</strong>
        </h1>

        {applications &&
          applications.map((application, i) => {
            return <ApplicationRow key={i} application={application} />;
          })}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  dispatch
});

const mapStateToProps = state => {
  const { currentPosition } = state.positions;
  return {
    currentPosition: currentPosition
  };
};

Applications.propTypes = {
  currentPosition: PropTypes.object,
  applications: PropTypes.arrayOf(PropTypes.object)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Applications);

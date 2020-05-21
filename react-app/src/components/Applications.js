import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { fetchApplications, fetchPosition } from "../reducers/positionReducer";

const ApplicationRow = ({ application }) => {
  return (
    <Link to={`/application/${application.id}`}>
      <h3>{application.applicant.name}</h3>
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
    const { currentPosition, applications } = this.props;

    if (!currentPosition) {
      return null;
    }
    return (
      <div>
        <h1>Appliations for {currentPosition.title}</h1>

        {applications &&
          applications.map((application, i) => {
            return <ApplicationRow key={i} />;
          })}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  dispatch
});

const mapStateToProps = state => {
  const { currentPosition } = state;
  const applications = [];
  return {
    currentPosition: currentPosition,
    applications: Object.values(applications)
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

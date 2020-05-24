import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { fetchPosition } from "../reducers/positionReducer";

export class Position extends React.Component {
  componentDidMount() {
    const { dispatch, match } = this.props;
    dispatch(fetchPosition(Number(match.params.position_id)));
  }

  render() {
    const { currentPosition } = this.props;
    if (!currentPosition) {
      return null;
    }
    return (
      <React.Fragment>
        <h3>Position {currentPosition.title}</h3>
      </React.Fragment>
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

Position.propTypes = {
  position: PropTypes.object
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Position);

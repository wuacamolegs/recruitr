import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchPositions } from "../reducers/positionReducer";

export class App extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchPositions({}));
  }
  render() {
    const { positions } = this.props;
    const position = positions[0];
    return (
      <div>
        <h1>Hello {(position && position.title) || "World"}!</h1>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  dispatch
});

const mapStateToProps = state => {
  const { positions } = state;
  return {
    positions: Object.values(positions)
  };
};

App.propTypes = {
  positions: PropTypes.arrayOf(PropTypes.object)
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;

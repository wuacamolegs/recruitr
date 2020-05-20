import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchUsers } from "../reducers/userReducer";

export class App extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchUsers({}));
  }
  render() {
    const { users } = this.props;
    const user = users[0];
    return (
      <div>
        <h1>Hello {(user && user.name) || "World"}!</h1>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  dispatch
});

const mapStateToProps = state => {
  const { users } = state;
  return {
    users: Object.values(users)
  };
};

App.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object)
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;

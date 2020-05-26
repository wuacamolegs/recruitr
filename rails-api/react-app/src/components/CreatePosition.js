import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { fetchHiringTeams } from "../reducers/hiringTeamReducer";
import { createPosition } from "../reducers/positionReducer";
import { Form, Button, Row, Col, Alert } from "react-bootstrap";

export class CreatePosition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      skills: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { dispatch, match } = this.props;
    dispatch(fetchHiringTeams());
  }

  handleChange(event) {
    const target = event.target;
    this.setState({
      [target.name]: target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ submitError: false });
    const { dispatch, match, history } = this.props;
    let savePromise;
    savePromise = dispatch(createPosition(this.state)).then(position => {
      history.push(`/positions/${position.id}/details`);
    });

    savePromise.catch(() => {
      this.setState({ submitError: true });
    });
  }

  render() {
    const { hiringTeams } = this.props;

    return (
      <React.Fragment>
        <h3>New Position</h3>
        {this.state.submitError && (
          <Alert
            variant="danger"
            onClose={() => this.setState({ submitError: false })}
            dismissible
          >
            <p>Oh you got an error!</p>
          </Alert>
        )}
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="positionForm.title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
              required
              type="text"
              placeholder="BackEnd Developer"
            />
          </Form.Group>
          <Form.Group controlId="positionForm.skills">
            <Form.Label>Skills</Form.Label>
            <Form.Control
              name="skills"
              value={this.state.skills}
              onChange={this.handleChange}
              required
              as="textarea"
              rows="3"
              placeholder="Ruby on Rails, Heroku, Postgresql (separated with commas)"
            />
          </Form.Group>
          <Form.Group controlId="positionForm.description">
            <Form.Label>Job Description</Form.Label>
            <Form.Control
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
              required
              as="textarea"
              rows="3"
            />
          </Form.Group>
          <Form.Group controlId="positionForm.hiringTeam">
            <Form.Label>Hiring Team</Form.Label>
            <Form.Control
              as="select"
              name="hiringTeamId"
              value={this.state.hiringTeamId}
              onChange={this.handleChange}
              required
            >
              <option>---</option>
              {hiringTeams &&
                hiringTeams.map(team => (
                  <option value={team.id}>{team.title}</option>
                ))}
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        {Object.values(this.state).toString()}
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

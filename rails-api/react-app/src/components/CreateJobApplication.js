import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { createJobApplication } from "../reducers/jobApplicationReducer";
import { fetchPosition } from "../reducers/positionReducer";
import { Form, Button, Row, Col, Alert } from "react-bootstrap";

export class CreateJobApplication extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      skills: "",
      linkedin: "",
      angelist: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { dispatch, match } = this.props;
    dispatch(fetchPosition(Number(match.params.position_id)));
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
    savePromise = dispatch(
      createJobApplication(this.state, this.props.position.id)
    ).then(jobApplication => {
      history.push(`/job_applications/${jobApplication.id}`);
    });

    savePromise.catch(() => {
      this.setState({ submitError: true });
    });
  }

  render() {
    const { position } = this.props;

    return (
      <React.Fragment>
        <h3>New JobApplication for {position.title}</h3>
        {this.state.submitError && (
          <Alert
            variant="danger"
            onClose={() => this.setState({ submitError: false })}
            dismissible
          >
            <p>Oh you got an error!</p>
          </Alert>
        )}
        <br />
        <Form onSubmit={this.handleSubmit}>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
                required
                type="text"
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleChange}
                required
                type="text"
              />
            </Form.Group>
          </Form.Row>
          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group>
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
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Linkedin</Form.Label>
              <Form.Control
                name="linkedin"
                value={this.state.linkedin}
                onChange={this.handleChange}
                type="text"
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>AngelList</Form.Label>
              <Form.Control
                name="angelist"
                value={this.state.angelist}
                onChange={this.handleChange}
                type="text"
              />
            </Form.Group>
          </Form.Row>
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
  const { currentPosition } = state.positions;
  return {
    position: currentPosition
  };
};

CreateJobApplication.propTypes = {
  position: PropTypes.object
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateJobApplication);

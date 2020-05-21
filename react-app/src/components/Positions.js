import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { fetchPositions } from "../reducers/positionReducer";
import { Table } from "react-bootstrap";
import Skills from "./commons/Skills";

const PositionRow = ({ position }) => {
  return (
    <tr>
      <td>
        <Link to={`/positions/${position.id}`}>{position.title}</Link>
      </td>
      <td>
        <Skills skills={position.skills} />
      </td>
      <td>
        <Link to={`/positions/${position.id}/applications`}>
          {position.applications} applications
        </Link>
      </td>
    </tr>
  );
};

PositionRow.propTypes = {
  position: PropTypes.object
};

export class Positions extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchPositions({}));
  }
  render() {
    const { positions } = this.props;
    const position = positions[0];
    return (
      <div>
        <h3>All Positions</h3>
        <Table hover>
          <tbody>
            {positions &&
              positions.map((position, i) => {
                return <PositionRow key={i} position={position} />;
              })}
          </tbody>
        </Table>
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

Positions.propTypes = {
  positions: PropTypes.arrayOf(PropTypes.object)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Positions);

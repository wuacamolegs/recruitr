import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";

const ScoreCards = ({ scores }) => {
  return (
    <React.Fragment>
      {scores && scores.map(score => <Card body>{score}</Card>)}
    </React.Fragment>
  );
};

ScoreCards.propTypes = {
  scores: PropTypes.arrayOf(PropTypes.string)
};

export default ScoreCards;

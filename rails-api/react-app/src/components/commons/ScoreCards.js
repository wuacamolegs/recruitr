import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import startCase from "lodash/startCase";

const ScoreCards = ({ scores }) => {
  return (
    <React.Fragment>
      {scores &&
        scores.map(score => (
          <Card body>
            {Object.entries(score).map(([key, value]) => (
              <p>
                {startCase(key)}: {value}
              </p>
            ))}
          </Card>
        ))}
    </React.Fragment>
  );
};

ScoreCards.propTypes = {
  scores: PropTypes.arrayOf(PropTypes.string)
};

export default ScoreCards;

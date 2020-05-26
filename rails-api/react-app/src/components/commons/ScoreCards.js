import React, { useState } from "react";
import PropTypes from "prop-types";
import { InputGroup, FormControl, Row, Col, Button } from "react-bootstrap";
import startCase from "lodash/startCase";

const ScoreCards = ({ scores, onSubmit }) => {
  const [arrScores, setScores] = useState(scores || []);

  const handleOnChange = (idx, key, value) => {
    let newScores = [...arrScores];
    newScores[idx][key] = value;
    setScores(newScores);
  };

  const newScoreCard = () => {
    const newScore = {
      dynamism: 0,
      experience: 0,
      interestInCompany: 0,
      interviewNotes: ""
    };
    let newScores = [...arrScores];
    newScores.push(newScore);
    return setScores(newScores);
  };

  const submit = () => {
    return onSubmit(arrScores);
  };

  return (
    <React.Fragment>
      {arrScores &&
        arrScores.map((score, idx) => (
          <Row className="mb-2">
            <Col sm={6}>
              {Object.entries(score).map(([key, value]) => (
                <InputGroup size="sm" key={idx}>
                  <InputGroup.Prepend>
                    <InputGroup.Text
                      id="inputGroup-sizing-sm"
                      style={{ width: 150 }}
                    >
                      {startCase(key)}
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    as={key === "notesInterview" ? "textarea" : "input"}
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    value={value}
                    onChange={e => handleOnChange(idx, key, e.target.value)}
                  />
                </InputGroup>
              ))}
            </Col>
          </Row>
        ))}

      <Button variant="primary" onClick={submit}>
        Update notes
      </Button>
      <Button variant="link" onClick={newScoreCard}>
        Add score card
      </Button>
    </React.Fragment>
  );
};

ScoreCards.propTypes = {
  scores: PropTypes.arrayOf(PropTypes.string)
};

export default ScoreCards;

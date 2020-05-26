import React, { useState } from "react";
import PropTypes from "prop-types";
import Skills from "./commons/Skills";
import sortBy from "lodash/sortBy";
import { Jumbotron, Button, Form } from "react-bootstrap";

const MatchRecruiter = ({
  position,
  applicant,
  recruiters,
  onChange,
  onSubmit
}) => {
  const [criteria, setCriteria] = useState(false);
  const [recruiterId, setRecruiterId] = useState(false);

  const handleOnChange = e => {
    const target = e.target;
    setCriteria(target.value);
    return onChange(target.value);
  };

  const handleOnSelect = e => {
    const target = e.target;
    return setRecruiterId(target.id);
  };

  const handleSubmitRecruiter = () => {
    if (recruiterId) {
      onSubmit(recruiterId);
    }
  };

  const sortedRecruiters = sortBy(recruiters, "matchingScore").reverse();

  return (
    <React.Fragment>
      <p>
        {applicant.fullName} has been added to the {position.title} position!
        Match {applicant.fullName} with a recruiter for the skills:
      </p>
      <Skills skills={position.skills} />
      <div style={{ marginBottom: "2rem", marginTop: "2rem" }}>
        <Form.Control
          as="select"
          value={criteria}
          onChange={handleOnChange}
          required
        >
          <option>---Select criteria</option>
          <option value="skills">Skills</option>
          <option value="seniority">Seniority</option>
          <option value="random">Random</option>
        </Form.Control>
        <p>Recruiters are ordered by similarity according to criteria</p>
      </div>
      {sortedRecruiters && (
        <div style={{ marginBottom: "2rem" }}>
          {sortedRecruiters.map(recruiter => (
            <Form.Check
              type="radio"
              id={recruiter.id}
              value={recruiter.id}
              label={recruiter.fullName}
              checked={recruiterId == recruiter.id}
              onChange={handleOnSelect}
            />
          ))}
        </div>
      )}
      <p>
        <Button variant="primary" onClick={handleSubmitRecruiter}>
          Submit
        </Button>
      </p>
    </React.Fragment>
  );
};

MatchRecruiter.propTypes = {
  position: PropTypes.object,
  applicant: PropTypes.object,
  recruiters: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func
};

export default MatchRecruiter;

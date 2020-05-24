import React from "react";
import PropTypes from "prop-types";
import { Badge } from "react-bootstrap";

const Skills = ({ skills }) => {
  return (
    <React.Fragment>
      {skills &&
        skills.map(skill => (
          <Badge style={{ marginBottom: "1rem" }} variant="light">
            {skill}
          </Badge>
        ))}
    </React.Fragment>
  );
};

Skills.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string)
};

export default Skills;

import React from "react";
import PropTypes from "prop-types";
import { Badge } from "react-bootstrap";

const Skills = ({ skills }) => {
  return (
    <React.Fragment>
      {skills &&
        Object.values(skills).map(({ skill, proficiency }, i) => (
          <span>
            <Badge
              key={i}
              style={{ marginRight: "1rem", marginBottom: "1rem" }}
              variant="secondary"
            >
              {skill}{" "}
              <Badge key={i} variant="light">
                {proficiency}
              </Badge>
            </Badge>
          </span>
        ))}
    </React.Fragment>
  );
};

Skills.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.object)
};

export default Skills;

import React from "react";
import PropTypes from "prop-types";
import { Badge } from "react-bootstrap";

const stateColor = state => {
  if (state == "matched") {
    return "success";
  } else {
    return "danger";
  }
};
const StateBadge = ({ state }) => {
  return (
    <Badge pill variant={stateColor(state)}>
      {state}
    </Badge>
  );
};

StateBadge.propTypes = {
  state: PropTypes.string
};

export default StateBadge;

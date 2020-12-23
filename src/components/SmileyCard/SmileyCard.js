import React from "react";
import "./SmileyCard.scss";
import PropTypes from "prop-types";
const SmileyCard = ({ state, date }) => {
  return (
    <>
      <h3
        title={date}
        className={`smiley ${state === ":)" ? "happy" : "unhappy"}`}
      >
        {state}
      </h3>
    </>
  );
};
SmileyCard.propTypes = {
  state: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
export default SmileyCard;

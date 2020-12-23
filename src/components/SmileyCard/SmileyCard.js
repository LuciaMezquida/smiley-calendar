import React, { useState } from "react";
import "./SmileyCard.scss";
import PropTypes from "prop-types";
const SmileyCard = ({ state }) => {
  return (
    <>
      <h3 className={`smiley ${state === ":)" ? "happy" : "unhappy"}`}>
        {state}
      </h3>
    </>
  );
};
SmileyCard.propTypes = {};
export default SmileyCard;

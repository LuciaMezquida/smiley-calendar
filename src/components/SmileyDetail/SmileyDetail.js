import "./SmileyDetail.scss";
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const SmileyDetail = ({ date, state, message, handleDeleteBtn }) => {
  const handleDelete = (ev) => {
    handleDeleteBtn(ev);
  };
  return (
    <div className="detail">
      <article className="detail__article">
        <h3
          className={`detail__smiley ${state === ":)" ? "happy" : "unhappy"}`}
        >
          {state}
        </h3>
        <p className={`detail__date ${state === ":)" ? "happy" : "unhappy"}`}>
          {date}
        </p>
        <p className="detail__message">{message}</p>
      </article>
      <Link
        className="link detail__button"
        to="/year"
        title="Back to smiley panel"
      >
        Back
      </Link>
      <Link className="link" to="/year">
        <button
          title="Delete"
          name={date}
          className="detail__delete"
          onClick={handleDelete}
        >
          <i className="far fa-trash-alt"></i>
        </button>
      </Link>
    </div>
  );
};
SmileyDetail.propTypes = {
  date: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};
export default SmileyDetail;

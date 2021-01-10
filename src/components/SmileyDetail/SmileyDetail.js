import "./SmileyDetail.scss";
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const SmileyDetail = ({ dataSingleSmiley, smileyData }) => {
  const handleDelete = (ev) => {
    handleDeleteBtn(ev);
  };
  const handleDeleteBtn = (ev) => {
    const dateButton = ev.currentTarget.name;
    const indexDateButton = smileyData.findIndex((item) => {
      return item.date === dateButton;
    });
    smileyData.splice(indexDateButton, 1);
    localStorage.setItem("info", JSON.stringify(smileyData));
  };
  return (
    <div className="detail">
      <article className="detail__article">
        <h3
          className={`detail__smiley ${
            dataSingleSmiley.state === ":)" ? "happy" : "unhappy"
          }`}
        >
          {dataSingleSmiley.state}
        </h3>
        <p
          className={`detail__date ${
            dataSingleSmiley.state === ":)" ? "happy" : "unhappy"
          }`}
        >
          {dataSingleSmiley.date}
        </p>
        <p className="detail__message">{dataSingleSmiley.message}</p>
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
          name={dataSingleSmiley.date}
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
  smileyData: PropTypes.array.isRequired,
  dataSingleSmiley: PropTypes.object.isRequired,
};
export default SmileyDetail;

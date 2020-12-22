import "./Edition.scss";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
class Edition extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form className="edition">
        <label htmlFor="date" className="edition__label">
          Date
        </label>
        <input type="date" name="date" id="date" className="edition__input" />
        <div className="checkbox-container">
          <h4 className="edition__label">State</h4>
          <label htmlFor="state" className="edition__smiley">
            <input
              type="radio"
              name="state"
              id="state"
              value=":)"
              className="edition__checkbox"
            />{" "}
            :)
          </label>
          <label htmlFor="state" className="edition__smiley">
            <input
              type="radio"
              name="state"
              id="state"
              value=":("
              className="edition__checkbox2"
            />{" "}
            :(
          </label>
        </div>
        <label htmlFor="message" className="edition__label">
          Message
        </label>
        <textarea
          type="text"
          name="message"
          id="message"
          className="edition__textarea"
          placeholder="How was your day?"
        />
        <Link className="edition__button-container" to="/year">
          <input type="button" value="Save" className="edition__save" />
          <input type="button" value="Cancel" className="edition__save" />
        </Link>
      </form>
    );
  }
}
Edition.propTypes = {};
export default Edition;

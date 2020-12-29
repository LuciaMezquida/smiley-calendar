import "./Edition.scss";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class Edition extends Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.pushData = this.pushData.bind(this);
  }
  handleInput(ev) {
    this.props.handleInput(ev);
  }
  pushData(ev) {
    const value = ev.currentTarget.value;
    this.props.pushData(value);
  }

  render() {
    return (
      <form className="edition">
        <label htmlFor="date" className="edition__label">
          Date
        </label>
        <input
          onChange={this.handleInput}
          type="date"
          name="date"
          id="date"
          value={this.props.date}
          className="edition__input"
        />
        <div className="checkbox-container">
          <h4 className="edition__label">State</h4>
          <label htmlFor="state" className="edition__smiley">
            <input
              onChange={this.handleInput}
              type="radio"
              name="state"
              id="state"
              value=":)"
              className="edition__radio-btn"
            />{" "}
            :)
          </label>
          <label htmlFor="state" className="edition__smiley">
            <input
              onChange={this.handleInput}
              type="radio"
              name="state"
              id="state"
              value=":("
              className="edition__radio-btn2"
            />{" "}
            :(
          </label>
        </div>
        <label htmlFor="message" className="edition__label">
          Message
        </label>
        <textarea
          onBlur={this.handleInput}
          type="text"
          name="message"
          id="message"
          className="edition__textarea"
          placeholder="How was your day?"
          disabled={this.props.state === ":)" ? false : true}
        />
        <div className="edition__button-container">
          <Link to="/year" title="Save smiley">
            <input
              type="button"
              value="Save"
              className="edition__save"
              onClick={this.pushData}
            />
          </Link>
          <Link to="/year" title="Back to calendar">
            <input type="button" value="Cancel" className="edition__save" />
          </Link>
        </div>
      </form>
    );
  }
}

Edition.propTypes = {
  handleInput: PropTypes.func.isRequired,
  pushData: PropTypes.func.isRequired,
  state: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
export default Edition;

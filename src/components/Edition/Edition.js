import "./Edition.scss";
import React, { Component } from "react";
import PropTypes from "prop-types";
class Edition extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form className="edition">
        <label htmlFor="date">Date</label>
        <input type="date" name="date" id="date" />
        <div className="checkbox-container">
          <h4>State</h4>
          <label htmlFor="state" className="label">
            <input type="checkbox" name="state" id="state" value=":)" />
            :)
          </label>
          <label htmlFor="state" className="label">
            <input type="checkbox" name="state" id="state" value=":(" />
            :(
          </label>
        </div>
        <label htmlFor="message" className="label">
          Message
        </label>
        <input type="text" name="message" id="message" />
        <input type="button" value="Save" />
        <input type="button" value="Cancel" />
      </form>
    );
  }
}
Edition.propTypes = {};
export default Edition;

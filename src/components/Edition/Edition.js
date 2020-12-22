import "./Edition.scss";
import React, { Component } from "react";
import PropTypes from "prop-types";
class Edition extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form action="" className="edition">
        <label htmlFor="date">Edition</label>
        <input type="date" name="date" id="date" />
      </form>
    );
  }
}
Edition.propTypes = {};
export default Edition;

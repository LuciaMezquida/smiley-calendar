import "./DaysList.scss";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
class DaysList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main className="mainList">
        <Link to="/edition">
          <button className="mainList__button">+</button>
        </Link>
        <ul className="mainList__year"></ul>
      </main>
    );
  }
}
DaysList.propTypes = {};
export default DaysList;

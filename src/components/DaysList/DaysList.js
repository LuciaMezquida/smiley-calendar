import "./DaysList.scss";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import SmileyCard from "../SmileyCard/SmileyCard";

class DaysList extends Component {
  render() {
    const smileyList = this.props.data.map((item, index) => (
      <li key={index}>
        <Link className="link" to={`/${item.date}`}>
          <SmileyCard state={item.state} date={item.date} />
        </Link>
      </li>
    ));
    return (
      <main className="mainList">
        <div className="mainList__button-container">
          <Link
            className="mainList__button-container--button link"
            to="/edition"
            title="Add smiley"
          >
            +
          </Link>
        </div>
        <ul className="mainList__year">{smileyList}</ul>
      </main>
    );
  }
}
DaysList.propTypes = {
  data: PropTypes.array.isRequired,
};
export default DaysList;

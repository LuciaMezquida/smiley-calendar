import "./DaysList.scss";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import SmileyCard from "../SmileyCard/SmileyCard";
class DaysList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const smileyList = this.props.data.map((item) => (
      <li key={item.date}>
        <Link className="link" to={item.date}>
          <SmileyCard state={item.state} date={item.date} />
        </Link>
      </li>
    ));
    return (
      <main className="mainList">
        <Link to="/edition">
          <button className="mainList__button">+</button>
        </Link>
        <ul className="mainList__year">{smileyList}</ul>
      </main>
    );
  }
}
DaysList.propTypes = {
  data: PropTypes.array.isRequired,
};
export default DaysList;

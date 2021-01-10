import "./DaysList.scss";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import SmileyCard from "../SmileyCard/SmileyCard";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

class DaysList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      happyFilter: false,
      sadFilter: false,
      smileyData: this.props.data,
    };
    this.handleCheck = this.handleCheck.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.filterSmiley = this.filterSmiley.bind(this);
  }
  handleCheck(ev) {
    this.setState({ [ev.currentTarget.value]: ev.currentTarget.checked });
  }
  handleReset() {
    localStorage.clear();
    this.setState({ smileyData: [] });
  }
  filterSmiley() {
    let moodSmiley;
    if (this.state.happyFilter) {
      moodSmiley = this.state.smileyData.filter((item) => item.state === ":)");
    }
    if (this.state.sadFilter) {
      moodSmiley = this.state.smileyData.filter((item) => item.state === ":(");
    }

    return moodSmiley;
  }
  render() {
    const filteredData =
      this.filterSmiley() !== undefined
        ? this.filterSmiley()
        : this.state.smileyData;
    const smileyList = filteredData
      .sort((a, b) => new Date(a.date) - new Date(b.date))
      .map((item, index) => (
        <li key={index}>
          <Link className="link" to={`/${item.date}`}>
            <SmileyCard state={item.state} date={item.date} />
          </Link>
        </li>
      ));
    return (
      <main className="mainList">
        <button
          title="Reset"
          className="mainList__reset"
          onClick={this.handleReset}
        >
          <i className="far fa-trash-alt"></i>
        </button>
        <div className="mainList__button-container">
          <FormControl component="fieldset">
            <FormGroup aria-label="position" row>
              <FormControlLabel
                onChange={this.handleCheck}
                value="happyFilter"
                control={<Switch color="primary" />}
                label="Happy"
                labelPlacement="start"
                className="mainList__button-container--smiley"
              />
            </FormGroup>
          </FormControl>
          <Link
            className="mainList__button-container--button link"
            to="/edition"
            title="Add smiley"
          >
            +
          </Link>
          <FormControl component="fieldset">
            <FormGroup aria-label="position" row>
              <FormControlLabel
                onChange={this.handleCheck}
                value="sadFilter"
                control={<Switch color="primary" />}
                label="Sad"
                labelPlacement="end"
                className="mainList__button-container--smiley"
              />
            </FormGroup>
          </FormControl>
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

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
          <FormControl component="fieldset">
            <FormGroup aria-label="position" row>
              <FormControlLabel
                value="start"
                control={<Switch color="primary" />}
                label=":)"
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
                value="end"
                control={<Switch color="primary" />}
                label=":("
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

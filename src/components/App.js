import React from "react";
import "../stylesheets/App.scss";
import { Route, Switch } from "react-router-dom";
import Landing from "./Landing/Landing";
import Footer from "./Footer/Footer";
import About from "./About/About";
import Edition from "./Edition/Edition";
import DaysList from "./DaysList/DaysList";
import SmileyDetail from "./SmileyDetail/SmileyDetail";
import { getCurrentDate } from "../utils/getData";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: getCurrentDate(),
      state: "",
      message: "",
      happy: false,
      sad: false,
    };
    this.smileyData = JSON.parse(localStorage.getItem("info"))
      ? JSON.parse(localStorage.getItem("info"))
      : [];
    this.handleInput = this.handleInput.bind(this);
    this.pushData = this.pushData.bind(this);
    this.renderSmileyDetail = this.renderSmileyDetail.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.filterSmiley = this.filterSmiley.bind(this);
  }

  //Events
  handleInput(ev) {
    this.setState({
      [ev.currentTarget.name]: ev.currentTarget.value,
    });
  }
  handleCheck(ev) {
    this.setState({ [ev.currentTarget.value]: ev.currentTarget.checked });
  }
  //Render
  pushData(value) {
    const { date, state, message } = this.state;
    if ((value === "Save" && date !== "" && state !== "") || message !== "") {
      this.smileyData.push(this.state);
      localStorage.setItem("info", JSON.stringify(this.smileyData));
      this.setState({
        date: "",
        state: "",
        message: "",
      });
      return this.smileyData;
    }
  }
  filterSmiley() {
    let goodSmiley;
    if (this.state.happy) {
      goodSmiley = this.smileyData.filter((item) => item.state === ":)");
    }
    if (this.state.sad) {
      goodSmiley = this.smileyData.filter((item) => item.state === ":(");
    }

    return goodSmiley;
  }
  renderSmileyDetail(props) {
    const smileyDetailDate = props.match.params.date;
    const smileyDetail = this.smileyData.find(
      (item) => item.date === smileyDetailDate
    );
    if (smileyDetail) {
      return (
        <SmileyDetail
          state={smileyDetail.state}
          date={smileyDetail.date}
          message={smileyDetail.message}
        />
      );
    }
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/about" component={About} />
          <Route path="/year">
            <DaysList
              data={
                this.filterSmiley() !== undefined
                  ? this.filterSmiley()
                  : this.smileyData
              }
              handleCheck={this.handleCheck}
            />
          </Route>
          <Route path="/edition">
            <Edition
              handleInput={this.handleInput}
              pushData={this.pushData}
              state={this.state.state}
              date={this.state.date}
            />
          </Route>
          <Route path="/:date" render={this.renderSmileyDetail} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;

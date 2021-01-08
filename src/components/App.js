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
      happyFilter: false,
      sadFilter: false,
      smileyData: JSON.parse(localStorage.getItem("info"))
        ? JSON.parse(localStorage.getItem("info"))
        : [],
    };
    this.handleInput = this.handleInput.bind(this);
    this.pushData = this.pushData.bind(this);
    this.renderSmileyDetail = this.renderSmileyDetail.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.filterSmiley = this.filterSmiley.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleDeleteBtn = this.handleDeleteBtn.bind(this);
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
  handleReset() {
    localStorage.clear();
    this.setState({ smileyData: [] });
    this.forceUpdate();
  }
  handleDeleteBtn(ev) {
    const dateButton = ev.currentTarget.name;
    const indexDateButton = this.smileyData.findIndex((item) => {
      return item.date === dateButton;
    });
    this.forceUpdate();
    this.state.smileyData.splice(indexDateButton, 1);
    localStorage.setItem("info", JSON.stringify(this.state.smileyData));
  }
  //Render
  pushData(value) {
    const { date, state, message } = this.state;
    if ((value === "Save" && date !== "" && state !== "") || message !== "") {
      this.state.smileyData.push({ date, state, message });
      localStorage.setItem("info", JSON.stringify(this.state.smileyData));
      this.setState({
        date: "",
        state: "",
        message: "",
      });
      return this.state.smileyData;
    }
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
  renderSmileyDetail(props) {
    const smileyDetailDate = props.match.params.date;
    const smileyDetail = this.state.smileyData.find(
      (item) => item.date === smileyDetailDate
    );
    if (smileyDetail) {
      return (
        <SmileyDetail
          state={smileyDetail.state}
          date={smileyDetail.date}
          message={smileyDetail.message}
          handleDeleteBtn={this.handleDeleteBtn}
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
                  : this.state.smileyData
              }
              handleCheck={this.handleCheck}
              handleReset={this.handleReset}
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

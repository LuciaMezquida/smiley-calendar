import React from "react";
import "../stylesheets/App.scss";
import { Route, Switch } from "react-router-dom";
import Landing from "./Landing/Landing";
import Footer from "./Footer/Footer";
import About from "./About/About";
import Edition from "./Edition/Edition";
import DaysList from "./DaysList/DaysList";
import SmileyDetail from "./SmileyDetail/SmileyDetail";

const data = [];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      state: "",
      message: "",
      formFull: false,
    };
    this.handleInput = this.handleInput.bind(this);
    this.pushData = this.pushData.bind(this);
    this.renderSmileyDetail = this.renderSmileyDetail.bind(this);
  }
  componentDidUpdate() {
    localStorage.setItem("info", JSON.stringify(this.state));
  }
  //Events
  handleInput(ev) {
    this.setState({
      [ev.currentTarget.name]: ev.currentTarget.value,
    });
  }
  //Render
  pushData(value) {
    if (value === "Save") {
      this.setState({ formFull: true });
      const dataInfo = JSON.parse(localStorage.getItem("info"));
      data.push(dataInfo);
      this.setState({
        date: "",
        state: "",
        message: "",
        formFull: false,
      });
      return data;
    }
  }
  renderSmileyDetail(props) {
    const smileyDetailDate = props.match.params.date;
    const smileyDetail = data.find((item) => item.date === smileyDetailDate);
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
    console.log(data);
    console.log(this.state.date);
    console.log(this.state.state);
    console.log(this.state.message);
    return (
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/about" component={About} />
          <Route path="/year">
            <DaysList data={this.state.formFull ? this.pushData() : data} />
          </Route>
          <Route path="/edition">
            <Edition
              handleInput={this.handleInput}
              pushData={this.pushData}
              state={this.state.state}
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

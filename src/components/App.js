import React from "react";
import "../stylesheets/App.scss";
import { Route, Switch } from "react-router-dom";
import Landing from "./Landing/Landing";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import About from "./About/About";
import Edition from "./Edition/Edition";
import DaysList from "./DaysList/DaysList";
import SmileyDetail from "./SmileyDetail/SmileyDetail";

let data = [];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      state: "",
      message: "",
    };
    this.handleInput = this.handleInput.bind(this);
    this.pushData = this.pushData.bind(this);
    this.renderSmileyDetail = this.renderSmileyDetail.bind(this);
  }
  //Events
  handleInput(ev) {
    this.setState({
      [ev.currentTarget.name]: ev.currentTarget.value,
    });
  }
  //Render
  pushData() {
    const { date, state, message } = this.state;
    if (date !== "" && state !== "" && message !== "") {
      data.push(this.state);
      this.setState({
        date: "",
        state: "",
        message: "",
      });
    }
    return data;
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
    const { date, state, message } = this.state;
    console.log(data);
    return (
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header />
            <Landing />
          </Route>
          <Route path="/about" component={About} />
          <Route path="/year">
            <DaysList data={this.pushData()} />
          </Route>
          <Route path="/edition">
            <Edition handleInput={this.handleInput} />
          </Route>
          <Route path="/:date" render={this.renderSmileyDetail} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;

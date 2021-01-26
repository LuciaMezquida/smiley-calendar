import React from "react";
import "../stylesheets/App.scss";
import { Route, Switch } from "react-router-dom";
import Landing from "./Landing/Landing";
import Footer from "./Footer/Footer";
import About from "./About/About";
import Edition from "./Edition/Edition";
import DaysList from "./DaysList/DaysList";
import SmileyDetail from "./SmileyDetail/SmileyDetail";
// import { getCurrentDate } from "../utils/getData";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      smileyData: JSON.parse(localStorage.getItem("info"))
        ? JSON.parse(localStorage.getItem("info"))
        : [],
    };
    this.renderSmileyDetail = this.renderSmileyDetail.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  //handle
  handleReset() {
    localStorage.clear();
    this.setState({ smileyData: [] });
  }
  //Render
  renderSmileyDetail(props) {
    const smileyDetailDate = props.match.params.date;
    const smileyDetail = this.state.smileyData.find(
      (item) => item.date === smileyDetailDate
    );
    if (smileyDetail) {
      return (
        <SmileyDetail
          dataSingleSmiley={smileyDetail}
          smileyData={this.state.smileyData}
        />
      );
    }
  }
  pushData(ev) {
    const { date, state, message } = this.state;
    if (
      (ev.currentTarget.value === "Save" && date !== "" && state !== "") ||
      message !== ""
    ) {
      this.props.smileyData.push({ date, state, message });
      localStorage.setItem("info", JSON.stringify(this.props.smileyData));
      this.setState({
        date: "",
        state: "",
        message: "",
      });
      return this.props.smileyData;
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
              smileyData={this.state.smileyData}
              handleReset={this.handleReset}
            />
          </Route>
          <Route path="/edition">
            <Edition smileyData={this.state.smileyData} />
          </Route>
          <Route path="/:date" render={this.renderSmileyDetail} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;

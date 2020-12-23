import React from "react";
import "../stylesheets/App.scss";
import { Route, Switch } from "react-router-dom";
import Landing from "./Landing/Landing";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import About from "./About/About";
import Edition from "./Edition/Edition";
import DaysList from "./DaysList/DaysList";

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
  }
  handleInput(ev) {
    this.setState({
      [ev.currentTarget.name]: ev.currentTarget.value,
    });
  }

  render() {
    const { date, state, message } = this.state;
    if (date !== "" && state !== "" && message !== "") {
      data.push(this.state);
    }
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
            <DaysList data={data} />
          </Route>
          <Route path="/edition">
            <Edition handleInput={this.handleInput} />
          </Route>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;

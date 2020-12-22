import React from "react";
import "../stylesheets/App.scss";
import { Route, Switch } from "react-router-dom";
import Landing from "./Landing/Landing";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import About from "./About/About";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header />
            <Landing />
          </Route>
          <Route path="/about" component={About} />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default App;

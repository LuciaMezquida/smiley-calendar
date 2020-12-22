import "../stylesheets/App.scss";
import React from "react";
import Landing from "./Landing/Landing";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Landing />
      </div>
    );
  }
}

export default App;

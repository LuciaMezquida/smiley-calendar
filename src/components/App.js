import React from "react";
import Landing from "./Landing/Landing";
import Header from "./Header/Header";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Landing />
      </div>
    );
  }
}

export default App;

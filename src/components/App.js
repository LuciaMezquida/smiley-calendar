import React from "react";
import Landing from "./Landing/Landing";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Landing />
        <Footer />
      </div>
    );
  }
}

export default App;

import React from "react";
import "./App.scss";
import Movies from "./components/Movies";
import Header from "./components/Header";
class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="app">
          <div className="main-container">
            <Movies />
          </div>
        </div>
      </>
    );
  }

}

export default App;

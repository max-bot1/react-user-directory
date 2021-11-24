import React, { Component } from "react";
import "./App.css";
import Main from "./Components/Main/Main";
import UserCard from "./Components/UserCard/UserCard";

class App extends Component {
  render() {
    return (
      <div>
        <Main />
        <UserCard />
      </div>
    );
  }
}

export default App;

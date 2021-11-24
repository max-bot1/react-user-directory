import React, { Component } from "react";
import "./CardNav.css";

class CardNav extends Component {
  render() {
    return (
      <div className="cardNavContainer">
        <button className="lastBtn">&lt; Previous</button>
        <div className="blueContainer">
          <button className="blueBtn">Edit</button>
          <button className="blueBtn">Delete</button>
          <button className="blueBtn">New</button>
        </div>
        <button className="nextBtn">Next &gt;</button>
      </div>
    );
  }
}

export default CardNav;

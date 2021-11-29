import React, { Component } from "react";
import NewBtn from "../NewBtn/NewBtn";
import "./CardNav.css";

class CardNav extends Component {
  render() {
    // const { data } = this.props;
    return (
      <div className="cardNavContainer">
        <button onClick={this.props.lastCard} className="lastBtn">
          &lt; Previous
        </button>
        <div className="blueContainer">
          <button className="blueBtn">Edit</button>
          <button className="blueBtn">Delete</button>
          <NewBtn />
        </div>
        <button onClick={this.props.nextCard} className="nextBtn">
          Next &gt;
        </button>
      </div>
    );
  }
}

export default CardNav;

import React, { Component } from "react";
import "./CardNav.css";

class CardNav extends Component {
  render() {
    return (
      <div className="cardNavContainer">
        <button onClick={this.props.lastCard} className="lastBtn">
          &lt; Previous
        </button>
        <div className="blueContainer">
          <button className="blueBtn">Edit</button>
          <button onClick={this.props.deleteCard} className="blueBtn">
            Delete
          </button>
          <button onClick={this.props.newCard} className="blueBtn">
            New
          </button>
        </div>
        <button onClick={this.props.nextCard} className="nextBtn">
          Next &gt;
        </button>
      </div>
    );
  }
}

export default CardNav;

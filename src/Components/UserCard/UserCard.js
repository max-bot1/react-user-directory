import React, { Component } from "react";
import "./UserCard.css";
import CardNav from "../CardNav/CardNav";
import data from "/Users/Max/Desktop/react-user-directory/react-user-directory/src/data";

class UserCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
    };
  }

  render() {
    return (
      <div className="cardMain">
        <div className="card"></div>
        <CardNav />
      </div>
    );
  }
}

export default UserCard;

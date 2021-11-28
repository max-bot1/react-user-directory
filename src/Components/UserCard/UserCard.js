import React, { Component } from "react";
import "./UserCard.css";
import CardNav from "../CardNav/CardNav";
import data from "/Users/Max/Desktop/react-user-directory/react-user-directory/src/data";
// import List from "../List/List";

class UserCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      employeeTotal: 25,
    };
  }

  render() {
    const { data, employeeTotal } = this.state;
    return (
      <div className="cardMain">
        <div className="card">
          <div className="userInfo">
            <div className="counter">
              <h4>
                {data.map((data, index) => {
                  return index === 0 ? data.id : "";
                })}
                /{employeeTotal}
              </h4>
            </div>
            <div className="name">
              <h2>Max Botwin</h2>
            </div>
            <br />
            <span>
              <strong>From:</strong> Dallas, Texas
            </span>
            <span>
              <strong>Job Title:</strong> Junior Web Developer
            </span>
            <span>
              <strong>Employer: </strong> 343 Industries
            </span>
            <br />
            <div>
              <strong>Favorite Movies:</strong>
            </div>
          </div>
        </div>
        <CardNav />
      </div>
    );
  }
}

export default UserCard;

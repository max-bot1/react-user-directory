import React, { Component } from "react";
import "./UserCard.css";
import CardNav from "../CardNav/CardNav";
import data from "/Users/Max/Desktop/react-user-directory/react-user-directory/src/data";
import List from "../List/List";

class UserCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      employeeTotal: 25,
      index: 0,
    };
  }

  render() {
    const { data, employeeTotal, index } = this.state;
    return (
      <div className="cardMain">
        <div className="card">
          {data.map((employee, index) => {
            return index === this.state.index ? (
              <div className="userInfo">
                <div className="counter">
                  <h4>
                    {employee.id}/{employeeTotal}
                  </h4>
                </div>
                <div className="name">
                  <h2>
                    {employee.name.first} {employee.name.last}
                  </h2>
                </div>
                <br />
                <span>
                  <strong>From:</strong> {employee.city}, {employee.country}
                </span>
                <span>
                  <strong>Job Title:</strong> {employee.title}
                </span>
                <span>
                  <strong>Employer: </strong> {employee.employer}
                </span>
                <br />
                <div className="list">
                  <strong>Favorite Movies:</strong>
                  <List data={data} index={index} />
                </div>
              </div>
            ) : (
              ""
            );
          })}
        </div>
        <CardNav />
      </div>
    );
  }
}

export default UserCard;

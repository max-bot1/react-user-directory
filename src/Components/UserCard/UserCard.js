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

  nextCard = () => {
    const newIndex = this.state.index + 1;
    newIndex === this.state.employeeTotal
      ? alert("There are no more employees.")
      : this.setState({ ...this.state, index: newIndex });
  };

  lastCard = () => {
    const newIndex = this.state.index - 1;
    newIndex === -1
      ? alert("There are no previous employees.")
      : this.setState({ ...this.state, index: newIndex });
  };

  deleteCard = () => {
    const { index, employeeTotal, data } = this.state;
    const newTotal = employeeTotal - 1;
    this.state.data.splice(index, 1);
    this.setState({
      employeeTotal: newTotal,
      data: data,
      index: index === newTotal ? index - 1 : index,
    });
  };

  render() {
    const { data, employeeTotal } = this.state;

    return (
      <div className="cardMain">
        <div className="card">
          {data.map((employee, index) => {
            return index === this.state.index ? (
              <div className="userInfo">
                <div className="counter">
                  <h4>
                    {this.state.index + 1}/{employeeTotal}
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
        <CardNav
          deleteCard={this.deleteCard}
          lastCard={this.lastCard}
          nextCard={this.nextCard}
          newCard={this.newCard}
        />
      </div>
    );
  }
}

export default UserCard;

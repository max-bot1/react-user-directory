import React, { Component } from "react";
import "./UserCard.css";
import CardNav from "../CardNav/CardNav";
import data from "/Users/Max/Desktop/Projects/react-user-directory/src/data";
import List from "../List/List";
import Form from "../Form/Form";

class UserCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      employeeTotal: 25,
      index: 0,
      first: "",
      last: "",
      location: "",
      title: "",
      employer: "",
      favoriteMovies: [],
      firstMovie: "",
      secondMovie: "",
      thirdMovie: "",
      className: "hidden",
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

  // showForm = () => {
  //   const form = document.getElementsByClassName("form");
  //   form.style.display = "flex, inline";
  // };

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  editCard = (e) => {
    e.preventDefault();
    const {
      data,
      first,
      last,
      city,
      country,
      firstMovie,
      secondMovie,
      thirdMovie,
      title,
      employer,
      index,
    } = this.state;

    const editedCard = {
      id: data[index].id,
      name: { first, last },
      city: city,
      country: country,
      employer: employer,
      title: title,
      favoriteMovies: [firstMovie, secondMovie, thirdMovie],
    };

    const newData = data;
    this.state.data.splice(this.state.index, 1, editedCard);
    this.setState({
      ...this.state,
      data: newData,
    });
  };

  showForm = () => {
    const { className } = this.state;
    this.setState({
      ...this.state,
      className: className === "hidden" ? "form" : "hidden",
    });
  };

  newCard = (e) => {
    const {
      data,
      employeeTotal,
      first,
      last,
      city,
      country,
      firstMovie,
      secondMovie,
      thirdMovie,
      title,
      employer,
    } = this.state;
    const newEmployeeTotal = employeeTotal + 1;

    const newEmployee = {
      id: newEmployeeTotal,
      name: { first, last },
      city: city,
      country: country,
      employer: employer,
      title: title,
      favoriteMovies: [firstMovie, secondMovie, thirdMovie],
    };

    const newData = data;
    data.push(newEmployee);
    this.setState({
      ...this.state,
      employeeTotal: newEmployeeTotal,
      index: employeeTotal,
      data: newData,
    });
  };

  render() {
    const {
      data,
      employeeTotal,
      first,
      last,
      city,
      country,
      firstMovie,
      secondMovie,
      thirdMovie,
      title,
      employer,
      className,
    } = this.state;

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
          ;
        </div>
        <CardNav
          deleteCard={this.deleteCard}
          lastCard={this.lastCard}
          nextCard={this.nextCard}
          showForm={this.showForm}
          newCard={this.newCard}
          editCard={this.editCard}
          showForm={this.showForm}
        />
        <Form
          first={first}
          last={last}
          city={city}
          country={country}
          firstMovie={firstMovie}
          secondMovie={secondMovie}
          thirdMovie={thirdMovie}
          title={title}
          employer={employer}
          handleInputChange={this.handleInputChange}
          className={className}
          editCard={this.editCard}
        />
      </div>
    );
  }
}

export default UserCard;

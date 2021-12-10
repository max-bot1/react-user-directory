import React, { Component } from "react";

class Form extends Component {
  render() {
    const {
      first,
      last,
      city,
      country,
      firstMovie,
      secondMovie,
      thirdMovie,
      title,
      employer,
      handleInputChange,
      className,
    } = this.props;
    return (
      <form className={className}>
        <input
          value={first}
          name="first"
          onChange={handleInputChange}
          placeholder="First Name"
        ></input>
        <input
          value={last}
          name="last"
          onChange={handleInputChange}
          placeholder="Last Name"
        ></input>
        <input
          value={city}
          name="city"
          onChange={handleInputChange}
          placeholder="City"
        ></input>
        <input
          value={country}
          name="country"
          onChange={handleInputChange}
          placeholder="Country"
        ></input>
        <input
          value={title}
          name="title"
          onChange={handleInputChange}
          placeholder="Job Title"
        ></input>
        <input
          value={employer}
          name="employer"
          onChange={handleInputChange}
          placeholder="Employer Name"
        ></input>
        <input
          value={firstMovie}
          name="firstMovie"
          onChange={handleInputChange}
          placeholder="First Favorite Movie"
        ></input>
        <input
          value={secondMovie}
          name="secondMovie"
          onChange={handleInputChange}
          placeholder="Second Favorite Movie"
        ></input>
        <input
          value={thirdMovie}
          name="thirdMovie"
          onChange={handleInputChange}
          placeholder="Third Favorite Movie"
        ></input>
        <button onClick={this.props.editCard} type="submit" className="blueBtn">
          Submit
        </button>
      </form>
    );
  }
}

export default Form;

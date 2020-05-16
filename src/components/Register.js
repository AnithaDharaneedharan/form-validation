import React, { Component } from "react";
import reactDOM from "react-dom";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&'*/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = (formErrors) => {
  debugger;
  let valid = true;
  Object.values(formErrors).forEach((val) => val.length > 0 && (valid = false));
 // Object.values(rest).forEach(val=> (val === null) && (valid =false ));
  return valid;
};

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      },
    };
  }

  handleChange = (e) => {
    debugger;
    const { name, value } = e.target;
    let formErrors = this.state.formErrors;

    switch (name) {
      case "firstName":
        formErrors.firstName =
          value !== null && value.length < 3
            ? "minimum 3 characters required"
            : "";
        break;
      case "lastName":
        formErrors.lastName =
          value.length < 3 ? "minimum 3 characters required" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "Invalid email address";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characters required" : "";
        break;
      default:
        break;
    }
    this.setState({ formErrors: formErrors, [name]: value });
  };

  handleSubmit = (e) => {
    this.handleChange(e);
    alert("success")
    debugger;
    e.preventDefault();
    if (formValid(this.state.formErrors)) {
      this.setState({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
      });
      //alert(`${this.state.firstName} ${this.state.lastName}  Registered Successfully !!!!`)
      //   console.log(`
      //   firstName: ${this.state.firstName},
      //   lastName: ${this.state.lastName},
      //   email: ${this.state.email},
      //   password: ${this.state.password},
      //    `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  render() {
    const formErrors = this.state.formErrors;
    return (
      <div className="login">
        {" "}
        <b>Register Form</b>
        <form onSubmit={this.handleSubmit} noValidate>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              className={`login-item ${
                formErrors.firstName.length > 0 ? "error" : ""
              }`}
              type="text"
              name="firstName"
              placeholder="your first name "
              onChange={this.handleChange}
            ></input>
            {formErrors.firstName.length > 0 && (
              <span className="errorMessage">{formErrors.firstName}</span>
            )}
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              className={`login-item ${
                formErrors.lastName.length > 0 ? "error" : ""
              }`}
              type="text"
              name="lastName"
              placeholder="your last name"
              onChange={(e) => this.handleChange(e)}
            ></input>
            {formErrors.lastName.length > 0 && (
              <span className="errorMessage">{formErrors.lastName}</span>
            )}
          </div>
          <div>
            <label htmlFor="email">Email id</label>
            <input
              className={`login-item ${formErrors.email.length > 0 ? "error" : ""}`}
              type="email"
              name="email"
              placeholder="your email id"
              onChange={(e) => this.handleChange(e)}
            ></input>
            {formErrors.email.length > 0 && <span className="errorMessage">{formErrors.email}</span>}
          </div>
          <div>
            <label htmlFor="email">password</label>
            <input
              className={`login-item ${
                formErrors.password.length > 0 ? "error" : ""
              }`}
              type="password"
              name="password"
              placeholder="type your password"
              onChange={(e) => this.handleChange(e)}
            ></input>
            {formErrors.password.length > 0 && (
              <span className="errorMessage">{formErrors.password}</span>
            )}
          </div>
          <div>
            <button type="submit" className="button-primary">
              Create Account
            </button>
          </div>
        </form>
      </div>
    );
  }
}

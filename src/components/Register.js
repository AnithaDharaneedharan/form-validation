import React, { Component } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

toast.configure();

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&'*/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = (formErrors) => {
  debugger;
  let valid = true;
  Object.values(formErrors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
};

export default class Register extends Component {
  fname = React.createRef();
  lname = React.createRef();
  mail = React.createRef();
  password = React.createRef();

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
      success: "",
      errors: "",
    };
  }

  handleValidation = () => {
    debugger;
   
    if (this.fname.current.value.length < 3) {

      toast.error("minimum 3 characters required for firstname");
      this.setState({formErrors : "minimum 3 characters required for firstname"})
    }

    if (this.lname.current.value.length < 3) {
      toast.error("minimum 3 characters required for lastname");
      this.setState({lastName : "minimum 3 characters required for firstname"})
    }

    if (!emailRegex.test(this.mail.current.value)) {
      toast.error("Invalid email address");
      this.setState({email : "minimum 3 characters required for firstname"})
    }

    if (this.password.current.value.length < 6) {
      toast.error("password should have minimum of 6 characters");
      this.setState({password : "minimum 3 characters required for firstname"})
    }
  };

  handleSubmit = (e) => {
    this.handleValidation();
    debugger;
    e.preventDefault();
    if (formValid(this.state.formErrors)) {
      this.setState({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
      });
      this.setState({ success: true });
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  render() {
    return (
      <div className="login">
        {" "}
        <b>Register Form</b>
        <form onSubmit={this.handleSubmit} noValidate>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              className="login-item"
              type="text"
              name="firstName"
              placeholder="your first name "
              ref={this.fname}
            ></input>
          </div>

          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              className="login-item"
              type="text"
              name="lastName"
              placeholder="your last name"
              ref={this.lname}
            ></input>
          </div>
          <div>
            <label htmlFor="email">Email id</label>
            <input
              className="login-item"
              type="email"
              name="email"
              placeholder="your email id"
              ref={this.mail}
            ></input>
          </div>
          <div>
            <label htmlFor="password">password</label>
            <input
              className="login-item"
              type="password"
              name="password"
              placeholder="type your password"
              ref={this.password}
            ></input>
          </div>
          <div>
            <button type="submit" className="button-primary">
              Create Account
            </button>
          </div>
          {this.state.success ? (
            <div className="success">Form successfully registered</div>
          ) : (
            <div className="error_message">
              {" "}
              Please fill the incomplete fields
            </div>
          )}
        </form>
      </div>
    );
  }
}

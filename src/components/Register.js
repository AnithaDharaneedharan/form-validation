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
  passcode = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",

      formErrors: "",

      success: "",
      error: "",
    };
  }

  handleValidation = () => {
    console.log("enteres handlevalidation");
    debugger;
    this.setState({ formErrors: "" });

    if (this.passcode.current.value.length < 6) {
      toast.error("password should have minimum of 6 characters");
      this.setState({
        formErrors: "minimum 6 characters required for password",
      });
      console.log("formerror state of password", this.state.formErrors);
    }

    if (this.fname.current.value.length < 3) {
      toast.error("minimum 3 characters required for firstname");
      this.setState({
        formErrors: "minimum 3 characters required for firstname",
      });
    }

    if (this.lname.current.value.length < 3) {
      toast.error("minimum 3 characters required for lastname");
      this.setState({
        formErrors: "minimum 3 characters required for lastname",
      });
    }

    if (!emailRegex.test(this.mail.current.value)) {
      toast.error("Invalid email address");
      this.setState({ formErrors: "minimum 3 characters required for email" });
    }

    console.log("eof", this.state.formErrors);
  };

  handleSubmit = (e) => {
    this.setState({ formErrors: "" });

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
      this.setState({ success: false });
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
    console.log("success value", this.state.success);
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
              ref={this.passcode}
            ></input>
          </div>
          <div>
            <button type="submit" className="button-primary">
              Create Account
            </button>
          </div>
          {console.log(this.state.success)}
          {this.state && this.state.success ? (
            <div> success </div>
          ) : (
            <div>Fail</div>
          )}
        </form>
      </div>
    );
  }
}

import React, { Component } from 'react';
import reactDOM from 'react-dom';


export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username : ''
        };
    }


    handleNameChange(e) {
        debugger
        if (e.key === "Enter") {
            this.setState({username: e.target.value})
            console.log(this.state.username)
        }
      
    }

    handlePasswordChange(e) {
        debugger
        if (e.key === "Enter") {
            this.setState({password: e.target.value})
            console.log(this.state.password)
        }
    }

    submitLogin() {
        debugger
        console.log("submit")
    }

    render() {
        return (
            <div className="login"> Login Form
                <input className="login-item"  type="text" name="username" placeholder="your name" onKeyUp={e => this.handleNameChange(e)}></input>
                <input  className="login-item"  type="password" name="password" placeholder="type your password" onKeyUp={e => this.handlePasswordChange(e)}></input>
                <button type="button" className="button-primary" onClick={(e)=> this.submitLogin(e)}>Login</button>
            </div>
        )
    }
}


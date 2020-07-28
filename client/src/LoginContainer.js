import React, {Component} from "react"
import {NavLink} from "react-router-dom";

class LoginContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }




    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    validateForm() {
        return this.username.length > 0 && this.password.length > 0;
    }

    handleSubmit(event) {
        alert('Thank you for logging in, ' + this.state.username);
        event.preventDefault();
        this.setState({
            username: "",
            password: ""
        });
    }

    handleRegister(event) {
        event.preventDefault();
    }
    render() {
        return(
            <div className="LoginContainer">
                <form onSubmit={this.handleSubmit}>

                    <input
                        placeholder="username"
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <p> </p>

                    <input
                        placeholder="password"
                        type="text"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <p> </p>
                    <NavLink to='/Diary'>Login</NavLink>
                    <p> </p>
                    <NavLink to='/Register'>Register</NavLink>
                </form>
            </div>
        )
    }
}
export default LoginContainer;
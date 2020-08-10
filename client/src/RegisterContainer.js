import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {NavLink, withRouter} from "react-router-dom";

class RegisterContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            username: "",
            password: "",
            firstName: "",
            lastName: "",
            submitted: false
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
        return this.state.username.length > 0 && this.state.password.length > 0;
    }

    createAccount =() => {
        fetch("http://localhost:8081/account/register", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                username: this.state.username,
                password: this.state.password,
                firstName: this.state.firstName,
                lastName: this.state.lastName
            })
        }).then((response => response.json())).then(body => console.log(body))
    }

    handleSubmit(event) {
        if (this.validateForm()) {
            alert('Thank you for creating an account, ' + this.state.username);
            event.preventDefault();
            this.createAccount();
            this.setState({
                submitted: true
            });
        }
        else {
            alert('Please make sure to enter a valid username and password.');
        }

    }

    render() {
        const submitted = this.state.submitted;
        if (submitted === true) {
            this.state.sumbitted = false;
            return <Redirect to="/Login" />
        }
        return (
            <div>
                <p>
                    Create An Account!
                </p>
                <form onSubmit={this.handleSubmit}>
                    <input
                        placeholder="Username*"
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <p> </p>
                    <input
                        placeholder="Password*"
                        type="text"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <p> </p>
                    <input
                        placeholder="First Name"
                        type="text"
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.handleChange}
                    />
                    <p> </p>
                    <input
                        placeholder="Last Name"
                        type="text"
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.handleChange}
                    />
                    <p> </p>
                    <input
                        placeholder="email"
                        type="text"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <p> * Required</p>
                    <button>Create Account</button>
                    <p> </p>
                    <NavLink to='/Login'>Back to Login</NavLink>
                </form>
            </div>
        );
    }
}
export default RegisterContainer;
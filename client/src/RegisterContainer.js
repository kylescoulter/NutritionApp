import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

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
        return this.username.length > 0 && this.password.length > 0;
    }

    handleSubmit(event) {
        alert('Thank you for creating an account, ' + this.state.username);
        event.preventDefault();
        this.setState({
            submitted: true
        });


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
                        placeholder="Username"
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <p> </p>
                    <input
                        placeholder="Password"
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
                    <p> </p>
                    <button onClick={this.handleSubmit}>Create Account</button>

                </form>
            </div>
        );
    }
}
export default RegisterContainer;
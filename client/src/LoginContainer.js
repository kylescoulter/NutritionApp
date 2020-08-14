import React, {Component} from "react"
import {NavLink, withRouter} from "react-router-dom";

class LoginContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            successful: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.sendUsername = this.sendUsername.bind(this);
    }


    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    validateForm() {
        return this.username.length > 0 && this.password.length > 0;
    }

    sendUsername() {
        this.props.getAccountUsername(this.state.username);
    }

    validateLogin() {
        fetch("http://localhost:8081/account/" + this.state.username)
            .then(
                response => {
                    if (!response.ok) {
                        throw new Error(response.statusText);
                    } else {
                        return response.json();
                    }
                })
            .then((result) => {
                    if (result.password === this.state.password) {
                        sessionStorage.setItem(this.state.successful, "true");
                        alert('Thank you for logging in, ' + this.state.username);
                        this.props.history.push('/Diary');
                    }
                    else {
                        alert("You have entered an incorrect password, please try again!");
                        this.setState({
                            username: "",
                            password: ""
                        });
                    }
                }
            ).catch((error) => {
                console.log('error: ' + error);
                alert("Username or password may be incorrect, please try again or register an account!");
                this.props.history.push('/Login');
                this.setState({
                    username: "",
                    password: ""
                });
        });
    }

    handleSubmit = (event) => {
        this.validateLogin();
        event.preventDefault();
        this.props.setUsernameProps(this.state.username);
    };

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

                    <button onClick={this.handleSubmit}> Login </button>
                    <p> </p>
                    <NavLink to='/Register'>Register</NavLink>
                </form>
            </div>
        )
    }
}
export default withRouter(LoginContainer);
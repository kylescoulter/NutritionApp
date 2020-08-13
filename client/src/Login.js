import React, {Component} from 'react';
import './App.css';
import LoginContainer from "./LoginContainer";
import BaseAppHeader from "./BaseAppHeader";

class Login extends Component{

    constructor(props){
        super(props);
        this.state = {
            username: ''
        }
    }

    setUsername = (name) => {
        this.setState( {
            username: name
        }, () => console.log("username was sent to parent " + this.state.username));
        this.props.setAccountUsernameProps(name);
    };

    render() {
        return (
            <div className="Login">
                <BaseAppHeader />
                <LoginContainer setUsernameProps={this.setUsername}/>
            </div>
        );
    }
}
export default Login;
import React, {Component} from 'react';
import './App.css';
import LoginContainer from "./LoginContainer";
import BaseAppHeader from "./BaseAppHeader";

class Login extends Component{
    render() {
        return (
            <div className="Login">
                <BaseAppHeader />
                <LoginContainer />
            </div>
        );
    }
}
export default Login;
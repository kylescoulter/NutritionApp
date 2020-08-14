import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route, Switch, withRouter} from "react-router-dom";
import Home from "./Home";
import Diary from "./Diary";
import Login from "./Login";
import Register from "./Register";

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        };
    }

   setAccountUsername = (name) =>{
        this.setState( {
                username: name
            });
    };


    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Switch>
                        <Route exact path='/' component={withRouter(Home)} />
                        <Route path='/Diary' render={() => <Diary username={this.state.username}/>} />
                        <Route path='/Login' render={() => <Login setAccountUsernameProps={this.setAccountUsername}/>} />
                        <Route path='/Register' component={withRouter(Register)} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}
export default App;


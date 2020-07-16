import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route, Switch, withRouter} from "react-router-dom";
import Home from "./Home";
import Diary from "./Diary";
import Login from "./Login";
import Register from "./Register";

class App extends Component{
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Switch>
                        <Route exact path='/' component={withRouter(Home)} />
                        <Route path='/Diary' component={withRouter(Diary)} />
                        <Route path='/Login' component={withRouter(Login)} />
                        <Route path='/Register' component={withRouter(Register)} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}
export default App;


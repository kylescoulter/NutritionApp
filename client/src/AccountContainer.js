import React from "react"
import "./App.css"
import {NavLink} from "react-router-dom";
import Account from "./Account";


export default class AccountContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {username: ''};
    }

    // componentDidMount() {
    //     fetch("http://localhost:8081/account/kylescoulter")
    //         .then(response => response.json())
    //         .then(
    //             (result) => {
    //                 this.setState({
    //                     username: result.username
    //                 });
    //             }
    //         );
    // }

    render() {
        return (
            <div className="AccountContainer">
                Welcome, <Account username={this.state.username} />
                <p> </p>
                <NavLink to="/Login" ><img src={require("./images/box-arrow-in-right.svg")} alt="Logout" height="32" width="32" title="Logout" /></NavLink>

            </div>
        )
    }
}
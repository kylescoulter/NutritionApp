import React from "react"
import "./App.css"
import {NavLink} from "react-router-dom";

export default class AccountContainer extends React.Component {
    render() {
        return (
            <div className="AccountContainer">
                Welcome, USER!
                <p> </p>
                <NavLink to="/Login" ><img src={require("./images/box-arrow-in-right.svg")} alt="Log Out" height="32" width="32" /></NavLink>

            </div>
        )
    }
}
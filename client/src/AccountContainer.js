import React from "react"
import "./App.css"

export default class AccountContainer extends React.Component {
    render() {
        return (
            <div className="AccountContainer">
                Welcome, USER!
                <p> </p>
                <img src={require("./images/LogoutCustom.jpg")} alt="Log Out"/>
            </div>
        )
    }
}
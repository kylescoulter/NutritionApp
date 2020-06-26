import React from "react"
import "./App.css"
import CurrentDate from "./CurrentDate";
export default class DiaryHeader extends React.Component {

    render() {
        return (
            <header className="DiaryHeader">
                <h1>
                    NutriNav
                </h1>
                <p>Track your meals!</p>
                <CurrentDate />
            </header>
        )
    }
}
import React from "react"
import "./App.css"
import BreakfastContainer from "./BreakfastContainer";
import LunchContainer from "./LunchContainer"
import DinnerContainer from "./DinnerContainer"

export default class MealsContainer extends React.Component {



    render() {
        return (
            <div className="MealsContainer">
                <p>Breakfast</p>
                <BreakfastContainer />

                <p>Lunch</p>
                <LunchContainer />

                <p>Dinner</p>
                <DinnerContainer />
            </div>
        )
    }
}
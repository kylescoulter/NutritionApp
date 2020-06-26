import React from "react"
import InputMeal from "./InputMeal";
import "./App.css"

export default class BreakfastContainer extends React.Component {
    addMealItem = name => {
        const newMealItem = {
            id: 4,
            name: name
        };
        this.setState()
    };
    render() {
        return (
            <div className="DinnerContainer">
                <InputMeal addMealProps={this.addMealItem}/>
            </div>
        )
    }
}
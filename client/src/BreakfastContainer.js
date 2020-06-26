import React from "react"
import InputMeal from "./InputMeal";
import "./App.css"
import {v4 as uuidv4} from "uuid";

export default class BreakfastContainer extends React.Component {
    state = {
        items: [ 
        ]
    };

    addMealItem = (name, cals) => {
        const newMealItem = {
            id: uuidv4,
            name: name,
            cal: cals
        };
        this.setState({
            items: [...this.state.items, newMealItem]
        })
    };
    render() {
        return (
            <div className="BreakfastContainer">
                <InputMeal addMealProps={this.addMealItem}/>
                {this.state.items.map(item => (
                    <p>{item.name}, {item.cal}</p>
                ))}

            </div>
        )
    }
}
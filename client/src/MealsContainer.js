import React from "react"
import "./App.css"
import ItemsContainer from "./ItemsContainer";

export default class MealsContainer extends React.Component {



    render() {
        return (
            <div className="MealsContainer">
                <p>Breakfast</p>
                <ItemsContainer />

                <p>Lunch</p>
                <ItemsContainer />

                <p>Dinner</p>
                <ItemsContainer />
            </div>
        )
    }
}
import React from "react"
import "./App.css"
import MealItem from "./MealItem";

export default class ItemsList extends React.Component {
    render() {
        return (
            <div className="BreakfastContainer">
                {this.props.items.map(item => (
                    <MealItem
                        key={item.id}
                        item={item}
                        handleChangeProps={this.props.handleChangeProps}
                        deleteItemProps={this.props.deleteItemProps}
                    />
                ))}
            </div>
        )
    }
}
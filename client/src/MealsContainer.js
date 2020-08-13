import React from "react"
import "./App.css"
import ItemsList from "./ItemsList";
import SearchItemInput from "./SearchItemInput";
import {v4 as uuidv4} from "uuid";
import InputCustomIngredient from "./InputCustomIngredient";

export default class MealsContainer extends React.Component {

    state = {
        breakfastItems: [

        ],
        lunchItems: [

        ],
        dinnerItems: [

        ]
    };

    handleChange = () => {
        console.log("clicked");
    };

    addBreakfastItem = (name, cals) => {
        const newMealItem = {
            id: uuidv4(),
            name: name.toString().slice(0, 30),
            cal: Math.round(cals)
        };
        this.setState({
            breakfastItems: [...this.state.breakfastItems, newMealItem]
        })
    };
    addLunchItem = (name, cals) => {
        const newMealItem = {
            id: uuidv4(),
            name: name.toString().slice(0, 30),
            cal: Math.round(cals)
        };
        this.setState({
            lunchItems: [...this.state.lunchItems, newMealItem]
        })
    };
    addDinnerItem = (name, cals) => {
        const newMealItem = {
            id: uuidv4(),
            name: name.toString().slice(0, 30),
            cal: Math.round(cals)
        };
        this.setState({
            dinnerItems: [...this.state.dinnerItems, newMealItem]
        })
    };

    deleteBreakfastItem = (id) => {
        this.setState({
            breakfastItems: [
                ...this.state.breakfastItems.filter(item => {
                return item.id !== id;
            })
            ]
        });
    };
    deleteLunchItem = (id) => {
        this.setState({
            lunchItems: [
                ...this.state.lunchItems.filter(item => {
                    return item.id !== id;
                })
            ]
        });
    };
    deleteDinnerItem = (id) => {
        this.setState({
            dinnerItems: [
                ...this.state.dinnerItems.filter(item => {
                    return item.id !== id;
                })
            ]
        });
    };

    render() {
        return (
            <div className="MealsContainer">
                <InputCustomIngredient />
                <p>Breakfast</p>
                <SearchItemInput addMealProps={this.addBreakfastItem}/>
                <ItemsList
                    items={this.state.breakfastItems}
                    handleChangeProps={this.handleChange}
                    deleteItemProps={this.deleteBreakfastItem}
                />

                <p>Lunch</p>
                <SearchItemInput addMealProps={this.addLunchItem}/>
                <ItemsList
                    items={this.state.lunchItems}
                    handleChangeProps={this.handleChange}
                    deleteItemProps={this.deleteLunchItem}
                />

                <p>Dinner</p>
                <SearchItemInput addMealProps={this.addDinnerItem}/>
                <ItemsList
                    items={this.state.dinnerItems}
                    handleChangeProps={this.handleChange}
                    deleteItemProps={this.deleteDinnerItem}
                />
            </div>
        )
    }
}
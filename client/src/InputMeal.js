import React from "react"
import "./App.css"
export default class InputMeal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            item: '',
            cal: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        alert('A nutritional itemName was submitted: ' + this.state.item + ": " + this.state.cal);
        event.preventDefault();
        this.props.addMealProps(this.state.item, this.state.cal);
        this.setState({
            item: "",
            cal: ""
        })
    }

    render() {
        return (
            <div className="InputMeal">
                <form onSubmit={this.handleSubmit}>
                    <label>Item:&nbsp;&nbsp;&nbsp;</label>
                    <input
                            type="text"
                            name="item"
                            value={this.state.item}
                            onChange={this.handleChange}
                    />

                    <label>&nbsp;&nbsp;&nbsp;Calories:&nbsp;&nbsp;&nbsp;</label>
                    <input
                            type="text"
                            name="cal"
                            value={this.state.cal}
                            onChange={this.handleChange}
                    />
                    <input type="submit" value="+" />
                </form>

            </div>
        )
    }
}
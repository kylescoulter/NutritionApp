import React from "react"
import "./App.css"
export default class InputCustomIngredient extends React.Component {

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

    createCustomIngredient = () => {
        fetch("http://localhost:8081/ingredient/create", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: this.state.item,
                calories: this.state.cal,
            })
        }).then((response => response.json())).then(body => console.log(body))
    }

    handleSubmit(event) {
        alert('A custom ingredient was added: ' + this.state.item );
        event.preventDefault();
    }

    render() {
        return (
            <div className="InputMeal">
                <form onSubmit={this.handleSubmit}>
                    <label>Create a custom ingredient: </label>
                    <input
                        type="text"
                        placeholder="custom ingredient"
                        name="item"
                        value={this.state.item}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        placeholder="calories"
                        name="cal"
                        value={this.state.cal}
                        onChange={this.handleChange}
                    />
                    <button onClick={this.createCustomIngredient}>
                        <img
                            src={require("./images/plus-circle.svg")}
                            alt="Create" height="13" width="13"
                            title="Create Ingredient"
                            className="AddIngredientButton"
                        />
                    </button>
                </form>
            </div>
        )
    }
}
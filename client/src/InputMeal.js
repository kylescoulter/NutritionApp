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

    searchIngredients = () => {
        if (this.state.item !== '') {
            fetch("http://localhost:8081/ingredient/" + this.state.item)
                .then(response => {
                    console.log(response.url);
                        if (!response.ok) {
                            throw new Error(response.statusText);
                        } else {
                            return response.json();
                        }
                    })
                .then((result) => {
                        console.log(result.name);
                        if (result.name === this.state.item) {
                            console.log(result)
                        }
                        else {
                            alert("This ingredient doesn't exist yet, please add it in the create custom ingredient box above!");
                        }
                    }
                ).catch((error) => {
                console.log('error: ' + error);
            });
        }

    };

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        alert('A nutritional item was submitted: ' + this.state.item + ": " + this.state.cal);
        event.preventDefault();
        //this.props.addMealProps(this.state.item, this.state.cal);
        // this.setState({
        //     item: "",
        //     cal: ""
        // })
    }

    render() {
        return (
            <div className="InputMeal">
                <form onSubmit={this.handleSubmit}>
                    <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Search:&nbsp;&nbsp;</label>
                    <input
                        type="text"
                        placeholder="search for an item/recipe..."
                        name="item"
                        onChange={this.handleChange}
                    />

                    <button onClick={this.searchIngredients}>
                        <img
                        src={require("./images/search.svg")}
                        alt="Search" height="10" width="15"
                        title="Search"
                        className="Search"
                        />
                    </button>

                    {/*<p> </p>*/}
                    {/*<label>Item:&nbsp;&nbsp;&nbsp;</label>*/}
                    {/*<input*/}
                    {/*        type="text"*/}
                    {/*        name="item"*/}
                    {/*        value={this.state.item}*/}
                    {/*        onChange={this.handleChange}*/}
                    {/*/>*/}

                    {/*<label>&nbsp;&nbsp;&nbsp;Calories:&nbsp;&nbsp;&nbsp;</label>*/}
                    {/*<input*/}
                    {/*        type="text"*/}
                    {/*        name="cal"*/}
                    {/*        value={this.state.cal}*/}
                    {/*        onChange={this.handleChange}*/}
                    {/*/>*/}
                    {/*<input type="submit" value="+" />*/}
                </form>
            </div>
        )
    }
}
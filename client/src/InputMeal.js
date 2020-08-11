import React from "react"
import "./App.css"
import "./searchResults.scss"
import Button from 'react-bootstrap/Button'
import SearchResultModal from './SearchResultModal'
export default class InputMeal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            item: '',
            cal: '',
            app_id: '1fbd8950',
            app_key: '3f79445dbc8bf58882f1eff5a2d6fb31',
            resultExample: document.querySelector('#result'),
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    searchIngredientDatabase = () => {
        if (this.state.item !== '') {
            fetch('https://api.edamam.com/api/food-database/v2/parser?ingr=' + this.state.item + '&app_id=1fbd8950&app_key=3f79445dbc8bf58882f1eff5a2d6fb31')
                .then(response => {
                    console.log(response.url);
                        if (!response.ok) {
                            throw new Error(response.statusText);
                        } else {
                            return response.json();
                        }
                    })
                .then((result) => {
                        let name = result.parsed[0].food.label;
                        let calories = result.parsed[0].food.nutrients.ENERC_KCAL;
                        this.setState({
                            item: name,
                            cal: calories,
                            resultExample: document.querySelector('#result')
                        });
                        alert("Your ingredient was found: " + name + calories);
                        if (result.hints.length) {
                            result.hints.forEach(hint => {
                                this.insertCard(hint.food)
                            })
                        }
                    }
                ).catch((error) => {
                console.log('error: ' + error);
            });
        }

    };

    insertCard = (food) => {
        if (food !== null) {
            this.state.resultExample.insertAdjacentHTML('beforeend', this.buildCard(food));
            //this.state.resultExample.insertAdjacentHTML('beforeend', this.displayAddButton(food.label, food.nutrients.ENERC_KCAL));
        }

    };

    buildCard = (data) => {
        const energy = data.nutrients.ENERC_KCAL ? `<li><b>Energy: </b><span>${data.nutrients.ENERC_KCAL.toFixed(1)}kcal</span></li>` : '';
        const carbs = data.nutrients.CHOCDF ? `<li><b>Carbs: </b><span>${data.nutrients.CHOCDF.toFixed(1)}g</span></li>` : '';
        const protein = data.nutrients.PROCNT ? `<li><b>Protein: </b><span>${data.nutrients.PROCNT.toFixed(1)}g</span></li>` : '';
        const fat = data.nutrients.FAT ? `<li><b>Fat: </b><span>${data.nutrients.FAT.toFixed(1)}g</span></li>` : 'not';

        return `<div class="card">
                  <div class="card-header">
                    <h3>${data.label}</h3>
                    <h4>${data.category}</h4>
                  </div>
                  <div class="card-body">
                    <ul>
                      ${energy}
                      ${carbs}
                      ${protein}
                      ${fat}
                    </ul>
                  </div>
                  <div class="card-footer">
                    <p><b>Brand: </b><span>${data.brand || 'None'}</span></p>
                    
                  </div>
                </div>
        `
    };



    addItemToList = (label, energy) => {
        this.setState({
            item: label,
            cal: energy
        });
        console.log(this.state.item);
        this.props.addMealProps(this.state.item, this.state.cal);
        this.setState({
            item: '',
            cal: ''
        })
    };

    displayAddButton = (label, energy) =>{
        return <Button onClick={this.addItemToList(label, energy)}>Add</Button>
    };

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {

        return (
            <div className="InputMeal">
                <form onSubmit={this.handleSubmit}>
                    <label>Search: </label>
                    <input
                        type="text"
                        placeholder="search for an item/recipe..."
                        name="item"
                        onChange={this.handleChange}
                    />
                    <button onClick={this.searchIngredientDatabase}>
                        <img
                        src={require("./images/search.svg")}
                        alt="Search" height="10" width="15"
                        title="Search"
                        className="Search"
                        />
                    </button>
                    <div id="result">
                    </div>
                </form>
            </div>

        )
    }
}
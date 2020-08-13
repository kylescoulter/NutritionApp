import React from "react"
import "./App.css"
import "./searchResults.scss"
import SearchResultModal from './SearchResultModal'
import {InputGroup, Form, Button} from 'react-bootstrap'
export default class InputMeal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            item: '',
            cal: '',
            app_id: '1fbd8950',
            app_key: '3f79445dbc8bf58882f1eff5a2d6fb31',
            resultExample: document.querySelector('#result'),
            resultsList: []
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
                        let searchResultsList = [];
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
                                //this.insertCard(hint.food)
                                searchResultsList.push(hint)
                            })
                        }
                        this.setState( {
                            resultsList: searchResultsList
                        });
                    }
                ).catch((error) => {
                console.log('error: ' + error);
            });
        }

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
                <p> </p>
                <Form onSubmit={this.handleSubmit}>
                    <InputGroup className="itemSearch" >
                        <Form.Control
                            type="text"
                            placeholder="search for an item!"
                            name="item"
                            onChange={this.handleChange}
                        />
                        <InputGroup.Append>
                            <Button
                                variant="outline-secondary"
                                onClick={this.searchIngredientDatabase}
                            >
                                <img
                                    src={require("./images/search.svg")}
                                    alt="Search"
                                    title="Search"
                                    className="Search"

                                />
                            </Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Form>
                <p> </p>
                <SearchResultModal
                    searchResults={this.state.resultsList}
                />
                <p> </p>
            </div>

        )
    }
}
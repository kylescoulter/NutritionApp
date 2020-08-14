import React from "react"
import "./App.css"
import {InputGroup, Form, Button} from 'react-bootstrap'
import CustomSearchResultModal from './CustomSearchResultModal'
export default class CustomIngredientInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            item: '',
            cal: '',
            resultsList: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    searchModalRef = (obj) => {
        this.showModal = obj && obj.handleModalShowHide;
    };

    addItemToList = (label, energy) => {
        this.setState({
            item: label,
            cal: energy
        });
        this.props.addMealProps(label, energy);
    };

    createCustomIngredient = () => {
        fetch("http://localhost:8081/ingredient/create", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: this.state.item,
                calories: this.state.cal,
            })
        }).then((response => response.json())).then(body => console.log(body))
    };

    fetchCustomIngredients = () => {
        fetch("http://localhost:8081/ingredients")
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                } else {
                    return response.json();
                }
            })
                .then((result) => {

                        let searchResultsList = [];
                        if (result.length) {
                            result.forEach(hint => {
                                searchResultsList.push(hint)
                            })
                        }
                        this.setState( {
                            resultsList: searchResultsList,
                        });
                        this.showModal();
                    }
                ).catch((error) => {
                    console.log('error: ' + error);
                });
    };

    handleSubmit(event) {
        alert('A custom ingredient was added: ' + this.state.item );
        event.preventDefault();
    }

    render() {
        return (
            <div className="CustomIngredientInput">
                <Form onSubmit={this.handleSubmit}>
                    Can't find what you're looking for? Add it here!
                    <Form.Control
                        type="text"
                        placeholder="custom ingredient"
                        name="item"
                        value={this.state.item}
                        onChange={this.handleChange}
                    />
                    <Form.Control
                        type="text"
                        placeholder="calories"
                        name="cal"
                        value={this.state.cal}
                        onChange={this.handleChange}
                    />
                    <InputGroup.Append>
                        <Button variant="secondary" onClick={this.createCustomIngredient}>
                            <img
                                src={require("./images/plus-circle.svg")}
                                alt="Create"
                                title="Create Ingredient"
                                className="AddIngredientButton"
                            />
                        </Button>
                    </InputGroup.Append>

                    <Button variant="outline-success" onClick={this.fetchCustomIngredients}>
                        <img
                            src={require("./images/search.svg")}
                            alt="SearchCustom"
                            title="Search Custom Ingredients"
                            className="SearchCustomIngredientButton"
                        />
                    </Button>
                    <CustomSearchResultModal
                        ref={this.searchModalRef}
                        searchResults={this.state.resultsList}
                        addItemProps={this.addItemToList}
                    />
                </Form>
            </div>
        )
    }
}
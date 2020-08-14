import React from "react"
import "./App.css"
import "./searchResults.scss"
import SearchResultModal from './SearchResultModal'
import {InputGroup, Form, Button, Spinner} from 'react-bootstrap'
export default class SearchItemInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            item: '',
            cal: '',
            app_id: '1fbd8950',
            app_key: '3f79445dbc8bf58882f1eff5a2d6fb31',
            resultsList: [],
            customResultList: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    searchModalRef = (obj) => {
        this.showModal = obj && obj.handleModalShowHide;
    };

    search = () => {
        this.searchIngredientDatabase();
        return <Spinner animation={"border"} />
    };

    searchIngredientDatabase = () => {
        if (this.state.item !== '') {
            fetch('https://api.edamam.com/api/food-database/v2/parser?ingr=' + this.state.item + '&app_id=1fbd8950&app_key=3f79445dbc8bf58882f1eff5a2d6fb31')
                .then(response => {
                        if (!response.ok) {
                            throw new Error(response.statusText);
                        } else {
                            return response.json();
                        }
                    })
                .then((result) => {
                        let searchResultsList = [];
                        if (result.hints.length) {
                            result.hints.forEach(hint => {
                                searchResultsList.push(hint)
                            })
                        }
                        this.setState( {
                            resultsList: searchResultsList,
                        });
                    }
                ).catch((error) => {
                console.log('error: ' + error);
            });
            fetch("http://localhost:8081/ingredient/" + this.state.item)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(response.statusText);
                    } else {
                        return response.json()
                    }
                })
                .then((result) => {
                        console.log(result);
                        let searchResultsList = [];
                        if (result) {
                            searchResultsList.push(result);
                            this.setState( {
                                customResultList: searchResultsList,
                            });
                        }
                    }
                ).catch((error) => {
                console.log('error: ' + error);
            });
            this.showModal();
        }
    };

    addItemToList = (label, energy) => {
        this.setState({
            item: label,
            cal: energy
        });
        this.props.addMealProps(label, energy);
    };

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        // this.setState( {
        //     item: ''
        // })
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
                                variant="secondary"
                                onClick={this.search}
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
                    ref={this.searchModalRef}
                    searchResults={this.state.resultsList}
                    addItemProps={this.addItemToList}
                    customSearchResults={this.state.customResultList}
                />
                <p> </p>
            </div>
        )
    }
}
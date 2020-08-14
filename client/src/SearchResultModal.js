import React from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import {v4 as uuidv4} from 'uuid'
import {Card} from "react-bootstrap";

class SearchResultModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modalShow : false
        };
    }

    handleClick = (label, cals) => {
        this.props.addItemProps(label, cals);
        this.handleModalShowHide()
    };

    buildCard = (data) => {
        const energy = data.nutrients.ENERC_KCAL ? <li><b>Calories: </b><span>{data.nutrients.ENERC_KCAL.toFixed(1)} kcal</span></li> : '';
        const carbs = data.nutrients.CHOCDF ? <li><b>Carbs: </b><span>{data.nutrients.CHOCDF.toFixed(1)}g</span></li> : '';
        const protein = data.nutrients.PROCNT ? <li><b>Protein: </b><span>{data.nutrients.PROCNT.toFixed(1)}g</span></li> : '';
        const fat = data.nutrients.FAT ? <li><b>Fat: </b><span>{data.nutrients.FAT.toFixed(1)}g</span></li> : 'N/A';

        return <div className="card" onClick={() => this.handleClick(data.label, data.nutrients.ENERC_KCAL)}>
                  <div className="card-header" >
                    <h3>{data.label}</h3>
                    <h4>{data.category}</h4>
                  </div>
                  <div className="card-body">
                    <ul>
                      {energy}
                      {carbs}
                      {protein}
                      {fat}
                    </ul>
                  </div>
                  <div className="card-footer">
                    <p><b>Brand: </b><span>{data.brand || 'None'}</span></p>
                  </div>
                </div>
    };

    buildCustomCard = (data) => {
        const calories = data.calories;
        const label = data.name;

        return  <div className="card">
                    <Card
                        bg={"light"}
                        onClick={() => this.handleClick(label, calories)}
                        text={"dark"}
                    >
                        <Card.Header
                            bg={"dark"}
                        >
                            CUSTOM INGREDIENT
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>
                                {label}
                            </Card.Title>
                            <Card.Text>
                                {calories} calories
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
    };

    showSearchResults = () => {
        return <Modal
            show={this.state.modalShow}
            size="lg"
            autoFocus
            aria-labelledby="contained-modal-title-vcenter"
            centered={true}
            scrollable={true}
            animation={true}
        >
            <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
                <Modal.Title id="contained-modal-title-vcenter">
                    Results:
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {this.populateResults()}
                {this.populateCustomResults()}

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => this.handleModalShowHide()}>Close</Button>
            </Modal.Footer>
        </Modal>
    };

    populateResults = () => {
        return this.props.searchResults.map(item => (
            <div key={uuidv4()}
            >
                {this.buildCard(item.food)}
            </div>
        ))
    };

    populateCustomResults = () => {
        return this.props.customSearchResults.map(item => (
            <div key={uuidv4()}
            >
                {this.buildCustomCard(item)}
            </div>
        ))
    };

    handleModalShowHide = () => {
        this.setState({
            modalShow: !this.state.modalShow
        })
    };

    render() {
        return (
            <div>
                {this.showSearchResults()}
            </div>
        )
    }
}
export default SearchResultModal;
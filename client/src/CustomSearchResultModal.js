import React from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Card} from "react-bootstrap";
import {v4 as uuidv4} from 'uuid';

class SearchResultModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modalShow : false
        };
    }

    handleClick = (label, cals) => {
        this.handleModalShowHide()
    };

    buildCard = (data) => {
        const calories = data.calories;
        const label = data.name;

        return  <Card
                    bg={"light"}
                    onClick={() => this.handleClick(label, calories)}
                    text={"dark"}
                >
                    <Card.Header>
                        Custom Ingredient
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>
                            {label.toUpperCase()}
                        </Card.Title>
                        <Card.Text>
                            {calories} calories
                        </Card.Text>
                    </Card.Body>
                </Card>
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
                {this.buildCard(item)}
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
import React from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class SearchResultModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modalShow : false

        }
    }

    buildCard = (data) => {
        const energy = data.nutrients.ENERC_KCAL ? <li><b>Energy: </b><span>{data.nutrients.ENERC_KCAL.toFixed(1)}kcal</span></li> : '';
        const carbs = data.nutrients.CHOCDF ? <li><b>Carbs: </b><span>{data.nutrients.CHOCDF.toFixed(1)}g</span></li> : '';
        const protein = data.nutrients.PROCNT ? <li><b>Protein: </b><span>{data.nutrients.PROCNT.toFixed(1)}g</span></li> : '';
        const fat = data.nutrients.FAT ? <li><b>Fat: </b><span>{data.nutrients.FAT.toFixed(1)}g</span></li> : 'not';

        return <div className="card" onClick={() => this.props.addItemProps(data.label, energy)}>
                  <div className="card-header">
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

    showSearchResults = () => {
        return this.props.searchResults.map(item => (
             <div key={item.food.foodId}
                  >
                 {this.buildCard(item.food)}
             </div>
        ))
    };

    handleModalShowHide =() => {
        this.setState({
            modalShow: !this.state.modalShow
        })
    };

    render() {
        return (
            <div>
                <Button
                    variant="outline-primary"
                    size="sm"
                    disabled={this.props.searchResults.length <= 0}
                    onClick={() => this.handleModalShowHide()}
                >
                    Open Search Results {this.props.searchResults.length > 0 ? this.props.searchResults.length : ''}
                </Button>
                <Modal
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
                        {this.showSearchResults()}

                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => this.handleModalShowHide()}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
export default SearchResultModal;
import React, {Component} from 'react'
import {Button, ListGroup} from 'react-bootstrap'

export default class MealItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: '',
            cal: '',
        };
    };

    render() {
        return (
            <div className="MealItem">
                <ListGroup horizontal="xl"  >
                    <ListGroup.Item variant="primary" action>
                        {this.props.item.name}
                    </ListGroup.Item>
                    <ListGroup.Item variant="primary">
                        Calories: {this.props.item.cal}
                    </ListGroup.Item>
                    <ListGroup.Item variant="primary">
                        <Button variant="outline-primary" size="sm" onClick={() => this.props.deleteItemProps(this.props.item.id)}>
                            <img
                                src={require("./images/trash.svg")}
                                alt="Remove"
                                title="Remove Item"
                                className="RemoveItemButton"
                            />
                        </Button>
                    </ListGroup.Item>
                </ListGroup>
            </div>
        )
    }
}
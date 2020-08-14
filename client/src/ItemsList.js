import React from "react";
import "./App.css";
import MealItem from "./MealItem";
import {ListGroup} from 'react-bootstrap';
import {v4 as uuidv4} from 'uuid';

export default class ItemsList extends React.Component {
    render() {
        return (
            <div className="ItemList">
                {this.props.items.map(item => (
                   <ListGroup variant="flush" as="ul">
                       <ListGroup.Item variant="primary" >
                           <MealItem
                               key={uuidv4()}
                               item={item}
                               handleChangeProps={this.props.handleChangeProps}
                               deleteItemProps={this.props.deleteItemProps}
                           />
                       </ListGroup.Item>
                   </ListGroup>

                ))}
            </div>
        )
    }
}

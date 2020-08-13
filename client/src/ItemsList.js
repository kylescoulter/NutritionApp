import React from "react"
import "./App.css"
import MealItem from "./MealItem";
import {ListGroup} from 'react-bootstrap'

export default class ItemsList extends React.Component {
    render() {
        return (
            <div className="ItemList">
                {this.props.items.map(item => (
                   <ListGroup variant="flush" as="ul">
                       <ListGroup.Item variant="primary" >
                           <MealItem
                               key={item.id}
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

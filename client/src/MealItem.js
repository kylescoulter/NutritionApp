import React, {Component} from 'react'

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
            <div>
                <li>
                    {this.props.item.name}, {this.props.item.cal}
                    &nbsp;&nbsp;&nbsp;<button onClick={() => this.props.deleteItemProps(this.props.item.id)}>remove</button>
                </li>
            </div>
        )
    }
}
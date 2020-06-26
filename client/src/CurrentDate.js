import React from "react"

export default class CurrentDate extends React.Component {

    constructor() {
        super();

        var today = new Date(),
            date =  (today.getMonth() + 1) + '/' + today.getDate()  + '/' + today.getFullYear();

        this.state = {
            date: date
        };

    }

    render() {
        return (
            <div className='CurrentDate'>
                Date: {this.state.date}
            </div>
        )
    }
}
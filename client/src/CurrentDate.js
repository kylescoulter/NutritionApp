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
                <img src={require("./images/calendar3-event.svg")} alt="Date: " height="20" width="20"/> {this.state.date}
            </div>
        )
    }
}
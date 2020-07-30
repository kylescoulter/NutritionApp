import * as React from "react";

class Account extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        };
        this.getAccountUsername = this.getAccountUsername.bind(this);
    }

    getAccountUsername(name){
        console.log(name);
        this.setState( {
            username: name
        })
    };

    render() {
        return (
            <p>
                {this.state.username}
            </p>
        );
    }
}

export default Account;
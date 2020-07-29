import * as React from "react";

class Account extends React.Component {
    constructor(props) {
        super(props);
        this.state = {sampleText: ''};
    }

    componentDidMount() {
        fetch("http://localhost:8081/account/kylescoulter" )
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        sampleText: result.content
                    });
                }
            );
    }

    render() {
        return (
            <p>
                {this.state.sampleText}
            </p>
        );
    }
}

export default Account;
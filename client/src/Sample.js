import * as React from "react";

class Sample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {sampleText: ''};
    }

    componentDidMount() {
        fetch("http://localhost:8081/sample" )
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

export default Sample;
import React from "react"
import {Form, Button, InputGroup} from 'react-bootstrap'

export default class GoalInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            goal: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    sendDailyGoal = () => {
        console.log("sending goal to account container" + this.state.goal );
        this.props.setGoalProps(this.state.goal);
    };

    render() {
        return (
            <div>
                <InputGroup>
                    <Form.Control
                        placeholder={"Enter Daily Goal!"}
                        type="number"
                        name="goal"
                        onChange={this.handleChange}
                    />
                    <InputGroup.Append>
                        <Button variant={"outline-primary"} onClick={() => this.sendDailyGoal()}>
                            <img src={require("./images/check-circle.svg")} alt={"Set Goal"} />
                        </Button>
                    </InputGroup.Append>
                </InputGroup>
            </div>
        )
    }
}
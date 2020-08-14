import React from "react"
import "./App.css"
import {NavLink} from "react-router-dom";
import Card from 'react-bootstrap/Card'
import GoalInput from "./GoalInput";


export default class AccountContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            dailyGoal: ''
        };
    }

    // componentDidMount() {
    //     fetch("http://localhost:8081/account/kylescoulter")
    //         .then(response => response.json())
    //         .then(
    //             (result) => {
    //                 this.setState({
    //                     username: result.username
    //                 });
    //             }
    //         );
    // }

    setAccountGoal = (goal) => {
        this.setState( {
            dailyGoal: goal
        });
        this.props.setDailyGoalProps(goal);

    };


    render() {
        return (
            <div className="AccountContainer">
                <Card
                    bg="light"
                    style={{width: "15rem"}}
                    border={"primary"}
                >
                    <Card.Header>
                        Welcome, {this.props.username}
                    </Card.Header>
                <Card.Body>
                    <GoalInput setGoalProps={this.setAccountGoal}/>
                </Card.Body>
                    <NavLink to="/Login" ><img src={require("./images/box-arrow-in-right.svg")} alt="Logout" height="32" width="32" title="Logout" /></NavLink>

                </Card>
            </div>
        )
    }
}
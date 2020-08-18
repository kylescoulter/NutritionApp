import React from 'react';
import './App.css';
import DiaryContainer from "./DiaryContainer";
import AccountContainer from "./AccountContainer";
import Sample from "./Sample";


class Diary extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            username: this.props.username,
            dailyGoal: ''
        };
    }

    setDailyGoal = (goal) => {
        this.setState({
            dailyGoal: goal
        })
    };

    render() {
        return (
            <div className="Diary">
                <AccountContainer username={this.state.username} setDailyGoalProps={this.setDailyGoal} />
                <DiaryContainer dailyGoal={this.state.dailyGoal}/>
                <Sample />
            </div>
        );
    }
}
export default Diary;
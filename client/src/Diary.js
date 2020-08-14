import React from 'react';
import './App.css';
import DiaryContainer from "./DiaryContainer";
import AccountContainer from "./AccountContainer";
import Sample from "./Sample";


class Diary extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            username: this.props.username
        };
    }

    render() {
        return (
            <div className="Diary">
                <AccountContainer username={this.state.username} />
                <DiaryContainer />
                <Sample />
            </div>
        );
    }
}
export default Diary;
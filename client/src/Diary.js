import React, {Component} from 'react';
import './App.css';
import DiaryContainer from "./DiaryContainer";
import AccountContainer from "./AccountContainer";
import Sample from "./Sample";


class Diary extends Component{
    render() {
        return (
            <div className="Diary">
                <AccountContainer />
                <DiaryContainer />
                <Sample />
            </div>
        );
    }
}
export default Diary;
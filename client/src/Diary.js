import React, {Component} from 'react';
import './App.css';
import DiaryContainer from "./DiaryContainer";
import AccountContainer from "./AccountContainer";

class Diary extends Component{
    render() {
        return (
            <div className="Diary">
                <AccountContainer />
                <DiaryContainer />
            </div>
        );
    }
}
export default Diary;
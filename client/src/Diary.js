import React from 'react';
import './App.css';
import DiaryContainer from "./DiaryContainer";
import AccountContainer from "./AccountContainer";

function Diary() {
    return (
        <div className="Diary">
            <AccountContainer />
            <DiaryContainer />
        </div>
    );
}

export default Diary;

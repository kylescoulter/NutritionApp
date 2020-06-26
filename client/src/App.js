import React from 'react';
import './App.css';
import DiaryContainer from "./DiaryContainer";
import AccountContainer from "./AccountContainer";

function App() {
  return (
    <div className="App">
        <AccountContainer />
        <DiaryContainer />
    </div>
  );
}

export default App;

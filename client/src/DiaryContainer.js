import React from "react";
import DiaryHeader from "./DiaryHeader";
import "./App.css"
import MealsContainer from "./MealsContainer";

export default class DiaryContainer extends React.Component {



    render() {
        return (
           <div className="DiaryContainer">
               <DiaryHeader />

               <MealsContainer dailyGoal={this.props.dailyGoal}/>
           </div>
        )
    }
}
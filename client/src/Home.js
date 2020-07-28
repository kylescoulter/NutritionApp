import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import BaseAppHeader from "./BaseAppHeader";


class Home extends Component {

    render() {
        return (
            <div>
                <BaseAppHeader />
                <NavLink to='/Login'>Login</NavLink>
            </div>
        )

    }
}
export default Home;
import React, {Component} from 'react';
import RegisterContainer from "./RegisterContainer";
import BaseAppHeader from "./BaseAppHeader";

class Register extends Component {
    render() {
        return (
            <div className="Register">
                <BaseAppHeader />
                <RegisterContainer />
            </div>
        );
    }
}
export default Register;
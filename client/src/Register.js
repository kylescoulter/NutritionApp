import React from 'react';
import RegisterContainer from "./RegisterContainer";
import BaseAppHeader from "./BaseAppHeader";

class Register extends React.Component {
    constructor(props){
        super(props);
    }

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
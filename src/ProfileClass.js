import React from "react";

class ProfileClass extends React.Component {
    constructor() {
        super();
    }
    componentDidMount() {
        console.log('profile component mounted')
    }

    render() {
        return (
            <div>
                <h1>Profile Component</h1>
            </div>
        );
    }
}

export default ProfileClass;
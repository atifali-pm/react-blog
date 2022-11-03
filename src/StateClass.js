import React from "react";

export default class StateClass extends React.Component{
    constructor() {
        super();
        this.state = {
            name: 'peter',
            email: 'peter@test.com',
            count: 0
        }
    }

    updateState()
    {
        this.setState({
                count: this.state.count+1
            }
        )
    }

    render(){
        return(
            <div>
                <h1>{this.state.name}</h1>
                <h1>{this.state.email}</h1>
                <h1>{this.state.count}</h1>
                <button onClick={() => {this.updateState()}}>Click for count</button>
            </div>
        )
    }
}
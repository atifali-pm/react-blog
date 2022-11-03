import React from "react";

export default class HideShowClass extends React.Component {

    constructor() {
        super();

        this.state = {
            show: true
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.show ? <h1>Text Show</h1> : <h1>Hide Text</h1>
                }
                <button onClick={() => {
                    this.setState({show: !this.state.show})
                }}>Toggle
                </button>
            </div>
        );
    }
}
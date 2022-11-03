import React from "react";

export default class LifeCycleClass extends React.Component {

    constructor() {
        super()
        this.state = {
            data: null
        }
        console.log('constructor')
    }

    componentDidMount() {
        console.log('componentDidMount')
        this.setState({data: 'updated'})
    }
    render() {
        console.log('render')
        return (
            <div>
                <h1>Life Cyle method</h1>
            </div>
        )
    }
}
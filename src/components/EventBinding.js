import React, { Component } from 'react'

class EventBinding extends Component {
    constructor(props) {
        super(props)
        this.clickHandler = this.clickHandler.bind(this)
        this.state = {
            message: 'hello'
        }
    }
    clickHandler() {
        this.setState({
            message: "goodBye"
        })
        console.log(this)
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandler.bind(this)}>click-1</button>
                <button onClick={() => this.clickHandler()}>click-2</button>
                <button onClick={this.clickHandler}>click-3</button>
            </div>
        )
    }
}

export default EventBinding

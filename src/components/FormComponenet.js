import React, { Component } from 'react'

class FormComponenet extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            topic: ''
        }
    }


    handleUsername = (event) => {
        this.setState({
            username: event.target.value
        })

    }

    handleTopic = (event) => {
        this.setState({
            topic: event.target.value
        })

    }

    handleSubmit = event => {
        alert(`${this.state.username} ${this.state.topic}`)
        event.preventDefault()
    }


    render() {
        const { username, topic } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>username</label>
                    <input type='text' value={username} onChange={this.handleUsername} />
                </div>
                <div>
                    <label>topic</label>
                    <select value={topic} onChange={this.handleTopic}>
                        <option value=""></option>
                        <option value="react">react</option>
                        <option value="angular">angular</option>
                    </select>
                </div>
                <button type="submit">submit</button>
            </form>
        )
    }
}

export default FormComponenet

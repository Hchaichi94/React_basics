import React, { Component } from 'react'
import withCounter from './withCounter'

export class ClickCounter extends Component {
    render() {
        const { count, incrementCount } = this.props
        return (
            <button onClick={incrementCount}>
                clicked {count} times
            </button>
        )
    }
}

export default withCounter(ClickCounter,5)

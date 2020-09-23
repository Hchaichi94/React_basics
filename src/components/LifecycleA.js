import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'insaf'
        }
        console.log('LifecycleA constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifecycleA componentDidMount')
    }

    shouldComponentUpdate() {
        console.log('LifecycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate() {
        console.log('LifecycleA componentDidUpdate')
    }
    change = () => {
        this.setState({
            name: 'akrem'
        })
    }
    render() {
        console.log('LifecycleA render')
        return (
            <div>
                LifecycleA
                <button onClick={this.change}>change state</button>
                <LifecycleB />
            </div>
        )
    }
}

export default LifecycleA

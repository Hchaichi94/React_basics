import React, { Component } from 'react'
import Child from './Child'


class Parent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            parentName: "i'm parent"
        }
    }
    greetParent = (childName) => {
        alert(`hello ${this.state.parentName } from ${childName}`)
    }
    render() {
        return (
            <div>
                <Child greetParent={this.greetParent} />
            </div>
        )
    }
}

export default Parent

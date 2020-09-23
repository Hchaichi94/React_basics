import React, { Component } from 'react'

class ClassClick extends Component {



    clickFnc() {
        console.log('helloooooo')
    }

    render() {
        return (
            <div>
                <button onClick={this.clickFnc}>click</button>
            </div>
        )
    }
}

export default ClassClick

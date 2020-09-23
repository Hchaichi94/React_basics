import React, { Component } from 'react'
import  RegComp from './RegComp'
import PrueComp from './PrueComp'


class ParentComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'akrem'
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'akrem'
            })
        }, 2000)
    }
    render() {
        console.log('.........ParentComp render.......')
        return (
            <div>
                ParentComp
                <RegComp name={this.state.name} />
                <PrueComp name={this.state.name} />
            </div>
        )
    }
}

export default ParentComp

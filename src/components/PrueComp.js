import React, { PureComponent } from 'react'

class PrueComp extends PureComponent {
    render() {
        console.log('.........PrueComp render.......')
        return (
            <div>
                PrueComp {this.props.name}
            </div>
        )
    }
}

export default PrueComp

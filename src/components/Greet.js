import React from 'react'

export const Greet = props => {
    const { name, age } = props
    return (
        <div>
            <h1>hello {name}</h1>
            <h1> {age}</h1>
        </div>
    )
}



export default Greet

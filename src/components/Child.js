import React from 'react'

export default function Child(props) {
    return (
        <div>
            <button onClick={()=>props.greetParent('child')}>greet parent</button>
        </div>
    )
}

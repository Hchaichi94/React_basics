import React from 'react'

function FunctionClick() {
    
    function clickFnc() {
        console.log('helloooooo')
    }
    return (
        <div>
            <button onClick={clickFnc}>click</button>
        </div>
    )
}

export default FunctionClick

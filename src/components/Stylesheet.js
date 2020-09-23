import React from 'react'
import './myStyles.css'

function Stylesheet(props) {
    const className = props.primary ? 'primary' : ''
    return (
        <div>
            <h1 className={`${className} font-xl`} >akrem hchaichi</h1>
        </div>
    )
}

export default Stylesheet

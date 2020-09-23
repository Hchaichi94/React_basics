import React from 'react'

export default function Person({person}) {
    return (
        <div>
            <h2>i am {person.name} ,i'm {person.age}</h2>
        </div>
    )
}

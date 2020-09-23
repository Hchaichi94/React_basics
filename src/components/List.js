import React, { Fragment } from 'react'
import Person from './Person'

function List() {
    const persons = [
        {
            id: 1,
            name: 'akrem',
            age: 26
        },
        {
            id: 2,
            name: 'insaf',
            age: 25
        },
        {
            id: 3,
            name: 'fathi',
            age: 56
        }
    ]

    const personList = persons.map(person => <Person key={person.id} person={person} />)

    const names = ['akrem', 'insaf', 'fathi']
    const namesList = names.map((name, index) => <h2 key={index}>{name} </h2>)


    return (
        <Fragment>
            <div>{personList}</div>
            <div>{namesList}</div>
        </Fragment>

    )
}

export default List

import React from 'react'

export default function Hero({ heroName }) {
    if (heroName === 'joker') {
        throw Error('not a hero')
    }
    return (
        <div>
            {heroName}
        </div>
    )
}

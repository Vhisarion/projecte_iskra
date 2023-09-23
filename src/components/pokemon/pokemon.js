import React from 'react'
import { useParams } from 'react-router-dom'

function Pokemon() {
    const {pokemonId} = useParams()
console.log(pokemonId);
    return (
        <div>Pokemon Component with id {pokemonId}</div>
    )
}

export default Pokemon
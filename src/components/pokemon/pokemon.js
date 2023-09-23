import React from 'react'
import { useParams } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { pokemonSelector } from '../../state/selectors'

function Pokemon() {
    const { pokemonId } = useParams()
    const pokemon = useRecoilValue(pokemonSelector(pokemonId))
    return (
        <>
            <img src={pokemon.sprites.front_default} alt={`Imatge del pokémon ${pokemon.name}`}></img>
            <div><b>Nom: </b>{pokemon.name}</div>
        </>
    )
}

export default Pokemon
import React from 'react'
import { useRecoilValue } from 'recoil'
import { pokemonListSelector } from '../../state/selectors'
import PokemonListItem from './PokemonListItem'

function PokemonList() {
    const pokemonList = useRecoilValue(pokemonListSelector)

    return (
        <ul>
            {pokemonList.map((pokemon, index) => {
                return <PokemonListItem key={index} pokemon={pokemon} />
            })}
        </ul>
    )
}

export default PokemonList
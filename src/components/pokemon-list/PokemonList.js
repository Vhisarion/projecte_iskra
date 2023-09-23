import React from 'react'
import { useRecoilValue } from 'recoil'
import { pokemonListSelector } from '../../state/selectors'
import { useNavigate } from 'react-router'

function PokemonList() {
    const navigate = useNavigate()
    const pokemonList = useRecoilValue(pokemonListSelector)

    return (
        <ul>
            {pokemonList.map((pokemon, index) => {
                return <li key={pokemon.id} onClick={() => navigate(`/pokemons/${index + 1}`)}>{pokemon.name}</li>
            })}
        </ul>
    )
}

export default PokemonList
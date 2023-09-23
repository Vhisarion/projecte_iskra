import React from 'react'
import { useNavigate } from 'react-router'

function PokemonListItem({ pokemon }) {
    const navigate = useNavigate()

    return (
        <li onClick={() => navigate(`/pokemons/${pokemon.name}`)} >{pokemon.name}
        </li>
    )
}

export default PokemonListItem
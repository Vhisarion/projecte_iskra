import React from 'react'
import { useNavigate } from 'react-router'
import { capitalizeFirstLetter } from '../../utils/StringUtils'

import styles from './PokemonList.module.css'

function PokemonListItem({ pokemon }) {
    const navigate = useNavigate()

    const pokemonId = pokemon.url.replace("https://pokeapi.co/api/v2/pokemon/", "").replaceAll("/", "")

    return (
        <li className={styles.listItem} onClick={() => navigate(`/pokemons/${pokemon.name}`)}>
            <p className={styles.p}>{capitalizeFirstLetter(pokemon.name)}</p>
            <p className={styles.p + " " + styles.idText}>{pokemonId}</p>
        </li>
    )
}

export default PokemonListItem
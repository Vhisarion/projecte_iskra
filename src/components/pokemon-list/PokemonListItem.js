import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { capitalizeFirstLetter } from '../../utils/StringUtils'

import styles from './PokemonList.module.css'

function PokemonListItem({ pokemon }) {
    const [pokeImage, setPokeImage] = useState(null)
    const navigate = useNavigate()
    console.log(pokemon);
    const pokemonId = pokemon.url.replace("https://pokeapi.co/api/v2/pokemon/", "").replaceAll("/", "")

    useEffect(() => {
        fetch(pokemon.url)
            .then(response => response.json())
            .then(data => setPokeImage(data.sprites.front_default))
    }, [pokemon])

    return (
        <li className={styles.listItem} onClick={() => navigate(`/pokemons/${pokemon.name}`)}>
            <img src={pokeImage} alt={`Sprite del pokémon ${pokemon.name}`}></img>
            <p className={styles.p}><b>{capitalizeFirstLetter(pokemon.name)}</b></p>
            <p className={styles.p + " " + styles.idText}>{pokemonId}</p>
        </li>
    )
}

export default PokemonListItem
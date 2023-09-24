import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { capitalizeFirstLetter } from '../../utils/StringUtils'

import styles from './PokemonList.module.css'
import { useRecoilValue } from 'recoil'
import { listModeState } from '../../state/atoms'
import { ListModes } from '../../enums/ListMode'

function PokemonItem({ pokemon }) {
    const [pokeImage, setPokeImage] = useState(null)
    const listMode = useRecoilValue(listModeState)
    const navigate = useNavigate()
    console.log(pokemon);
    const pokemonId = pokemon.url.replace("https://pokeapi.co/api/v2/pokemon/", "").replaceAll("/", "")

    useEffect(() => {
        fetch(pokemon.url)
            .then(response => response.json())
            .then(data => setPokeImage(data.sprites.front_default))
    }, [pokemon])

    switch (listMode) {
        case ListModes.GRID: {
            return (
                <li className={styles.gridItem} onClick={() => navigate(`/pokemons/${pokemon.name}`)}>
                    <img src={pokeImage} alt={`Sprite del pokémon ${pokemon.name}`}></img>
                    <p className={styles.p + " " + styles.idText}>{pokemonId}</p>
                    <p className={styles.p}><b>{capitalizeFirstLetter(pokemon.name)}</b></p>
                </li>
            )
        }
        default: {
            return (
                <li className={styles.listItem} onClick={() => navigate(`/pokemons/${pokemon.name}`)}>
                    <img src={pokeImage} alt={`Sprite del pokémon ${pokemon.name}`}></img>
                    <p className={styles.p}><b>{capitalizeFirstLetter(pokemon.name)}</b></p>
                    <p className={styles.p + " " + styles.idText}>{pokemonId}</p>
                </li>
            )
        }
    }
}

export default PokemonItem
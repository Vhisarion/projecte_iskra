import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { pokemonSelector } from '../../state/selectors'
import PokemonSpinner from '../pokemon-spinner/PokemonSpinner'

import styles from './Pokemon.module.css'
import { capitalizeFirstLetter } from '../../utils/StringUtils'
import PokeButton from '../pokebutton/PokeButton'

function Pokemon() {
    const { pokemonId } = useParams()
    const navigate = useNavigate()
    const pokemon = useRecoilValue(pokemonSelector(pokemonId))
    const [imageLoading, setImageLoading] = useState(true)
    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.title}>{capitalizeFirstLetter(pokemon.name)}</h1>
                <div className={styles.spriteContainer}>
                    {imageLoading && <PokemonSpinner />}
                    <img className={styles.sprite} src={pokemon.sprites.other["official-artwork"].front_default} alt={`Imatge del pokémon ${pokemon.name}`} onLoad={() => setImageLoading(false)}></img>

                </div>
                <PokeButton className={styles.backButton} data="🠔 Tornar" onClick={() => navigate("/pokemons")} />
            </div>
        </>
    )
}

export default Pokemon
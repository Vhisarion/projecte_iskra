import React from 'react'
import { useRecoilValue } from 'recoil'
import { pokemonListSelector } from '../../state/selectors'
import PokemonListItem from './PokemonListItem'

import styles from './PokemonList.module.css'

function PokemonList() {
    const pokemonList = useRecoilValue(pokemonListSelector)

    return (
        <ul className={styles.listContainer}>
            {pokemonList.map((pokemon, index) => {
                return <PokemonListItem key={index} pokemon={pokemon} />
            })}
        </ul>
    )
}

export default PokemonList
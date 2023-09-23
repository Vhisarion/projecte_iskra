import React from 'react'
import { useRecoilValue } from 'recoil'
import { pokemonListSelector } from '../../state/selectors'
import PokemonListItem from './PokemonListItem'


import styles from './PokemonList.module.css'
import PageSelector from './PageSelector'
import { currentPageState, itemsPerPageState, listModeState } from '../../state/atoms'
import ListModeSelector from './ListModeSelector'

function PokemonList() {
    const pokemonList = useRecoilValue(pokemonListSelector)
    const currentPage = useRecoilValue(currentPageState);
    const listMode = useRecoilValue(listModeState)
    const itemsPerPage = useRecoilValue(itemsPerPageState)
    
    const pokemonsToShow = pokemonList.slice((currentPage - 1) * itemsPerPage, itemsPerPage * currentPage)

    return (
        <div className={styles.container}>
            <div className={styles.listOptionsContainer}>
                <PageSelector totalItems={pokemonList.length} />
                <ListModeSelector />
            </div>
            <ul className={styles.listContainer}>
                {pokemonsToShow.map((pokemon, index) => {
                    return <PokemonListItem key={index} pokemon={pokemon} />
                })}
            </ul>
        </div>
    )
}

export default PokemonList
import React from 'react'
import { useRecoilValue } from 'recoil'
import { currentItemsPerPage, pokemonListSelector } from '../../state/selectors'
import PokemonItem from './PokemonItem'

import styles from './PokemonList.module.css'
import PageSelector from './PageSelector'
import { currentPageState, listModeState } from '../../state/atoms'
import ListModeSelector from './ListModeSelector'
import { ListModes } from '../../enums/ListMode'

function PokemonList() {
    const pokemonList = useRecoilValue(pokemonListSelector)
    const currentPage = useRecoilValue(currentPageState);
    const listMode = useRecoilValue(listModeState)
    const itemsPerPage = useRecoilValue(currentItemsPerPage)

    const pokemonsToShow = pokemonList.slice((currentPage - 1) * itemsPerPage, itemsPerPage * currentPage)

    return (
        <div className={styles.container}>
            <div className={styles.listOptionsContainer}>
                <PageSelector totalItems={pokemonList.length} />
                <ListModeSelector />
            </div>
            <ul className={(listMode === ListModes.LIST) ? styles.listContainer : styles.gridContainer}>
                {pokemonsToShow.map((pokemon, index) => {
                    return <PokemonItem key={index} pokemon={pokemon} />
                })}
            </ul>
        </div>
    )
}

export default PokemonList
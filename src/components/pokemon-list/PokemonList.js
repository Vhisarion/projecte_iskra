import React from 'react'
import { useRecoilValue } from 'recoil'
import { pokemonListSelector } from '../../state/selectors'
import PokemonItem from './PokemonListItem'


import styles from './PokemonList.module.css'
import PageSelector from './PageSelector'
import { currentPageState, gridItemsPerPageState, listItemsPerPageState, listModeState } from '../../state/atoms'
import ListModeSelector from './ListModeSelector'
import { ListModes } from '../../enums/ListMode'

function PokemonList() {
    const pokemonList = useRecoilValue(pokemonListSelector)
    const currentPage = useRecoilValue(currentPageState);
    const listMode = useRecoilValue(listModeState)
    const listItemsPerPage = useRecoilValue(listItemsPerPageState)
    const gridItemsPerPage = useRecoilValue(gridItemsPerPageState)

    let itemsPerPage = 12;
    switch (listMode) {
        case ListModes.GRID: {
            itemsPerPage = gridItemsPerPage
            break
        }
        default: {
            itemsPerPage = listItemsPerPage
            break
        }
    }

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
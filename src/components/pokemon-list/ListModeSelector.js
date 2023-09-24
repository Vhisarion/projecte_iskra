import React from 'react'

import { BsFillGridFill, BsList } from 'react-icons/bs'
import { useRecoilState } from 'recoil'
import { listModeState } from '../../state/atoms'

import styles from './PokemonList.module.css'
import { ListModes } from '../../enums/ListMode'

function ListModeSelector() {
    const [listMode, setListMode] = useRecoilState(listModeState)

    return (
        <div className={styles.listModeSelectorContainer}>
            {listMode !== ListModes.LIST && <BsList className={styles.iconButton} onClick={() => setListMode(ListModes.LIST)} />}
            {listMode !== ListModes.GRID && <BsFillGridFill className={styles.iconButton} onClick={() => setListMode(ListModes.GRID)} />}
        </div>
    )
}

export default ListModeSelector
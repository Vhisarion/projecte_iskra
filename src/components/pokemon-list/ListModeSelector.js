import React from 'react'

import { BsFillGridFill, BsList } from 'react-icons/bs'
import { useRecoilState } from 'recoil'
import { listModeState } from '../../state/atoms'

import styles from './PokemonList.module.css'

function ListModeSelector() {
    const [listMode, setListMode] = useRecoilState(listModeState)

    return (
        <div className={styles.listModeSelectorContainer}>
            <BsList className='icon-button' />
            <BsFillGridFill className={styles.iconButton} />
        </div>
    )
}

export default ListModeSelector
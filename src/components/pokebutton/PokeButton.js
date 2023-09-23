import React from 'react'

import styles from './PokeButton.module.css'

function PokeButton({ onClick, data }) {
    return (
        <button className={styles.pokeButton} data={data} onClick={onClick}></button>
    )
}

export default PokeButton
import React from 'react'

import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

import styles from './PokemonList.module.css'
import { useRecoilState, useRecoilValue } from 'recoil'
import { currentPageState, itemsPerPageState } from '../../state/atoms'

function PageSelector({ totalItems }) {
    const [currentPage, setCurrentPage] = useRecoilState(currentPageState)
    const itemsPerPage = useRecoilValue(itemsPerPageState)

    const totalPages = Math.floor(totalItems / itemsPerPage) + 1

    let pageNumberList = []
    for (let i = currentPage - 2; i <= currentPage + 2; i++) {
        pageNumberList.push(i);
    }

    const changePage = (newPage) => {
        if (newPage <= 0 || newPage > totalPages) return
        setCurrentPage(newPage)
    }

    return (
        <div className={styles.pageSelectorContainer}>
            <BsArrowLeft className={styles.iconButton} onClick={() => changePage(currentPage - 1)} />
            {pageNumberList.map(number => {
                if (number <= 0 || number > totalPages) return <div key={number} className={styles.emptyPageNumber}></div>

                let className = styles.pageNumber
                if (currentPage === number) {
                    className += ` ${styles.currentPage}`
                }

                return <div key={number} className={className} onClick={() => changePage(number)}>{number}</div>
            })}
            <BsArrowRight className={styles.iconButton} onClick={() => changePage(currentPage + 1)} />
        </div>
    )
}

export default PageSelector
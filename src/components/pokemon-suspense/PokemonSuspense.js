import React, { Suspense } from 'react'
import PokemonSpinner from '../pokemon-spinner/PokemonSpinner'

function PokemonSuspense({ children }) {
    return (
        <Suspense fallback={<PokemonSpinner />}>
            {children}
        </Suspense>
    )
}

export default PokemonSuspense
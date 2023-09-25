import React, { Suspense } from 'react'
import PokemonSpinner from '../pokemon-spinner/PokemonSpinner'
import { ErrorBoundary } from 'react-error-boundary'

function PokemonSuspense({ children }) {
    return (
        <ErrorBoundary fallback={<div>error</div>}>
          <Suspense fallback={<PokemonSpinner />}>{children}</Suspense>
        </ErrorBoundary>
    );
}

export default PokemonSuspense
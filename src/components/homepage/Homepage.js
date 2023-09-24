import React from 'react'
import PokemonList from '../pokemon-list/PokemonList'
import PokemonSuspense from '../pokemon-suspense/PokemonSuspense'

function Homepage() {
    return (<>
        <h1>◓ Llista de Pokémon de Joaquim Griñó ◓</h1>
            <PokemonSuspense>
                <PokemonList />
            </PokemonSuspense>
    </>
    )
}

export default Homepage
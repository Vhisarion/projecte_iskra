const BASE_URL = "https://pokeapi.co/api/v2"

export const getAllPokemons = async () => {
    return fetch(`${BASE_URL}/pokemon?limit=151`)
}

export const getPokemonById = async (id) => {
    return fetch(`${BASE_URL}/pokemon/${id}`)
}






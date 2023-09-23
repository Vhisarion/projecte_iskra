import { selector, selectorFamily } from "recoil";
import { getAllPokemons, getPokemonById } from "../api/pokemonApi";

export const pokemonListSelector = selector({
    key: 'PokemonList',
    get: async () => {
        const response = await getAllPokemons();
        const { results } = await response.json()
        await delay(500) // Fake delay to check spinner is working
        return results
    },
});

export const pokemonSelector = selectorFamily({
    key: 'Pokemon',
    get: (pokemonId) => async () => {
        await delay(500) // Fake delay to check spinner is working
        const response = await getPokemonById(pokemonId);
        return await response.json()
    },
});


function delay(t) {
    return new Promise(resolve => {
        setTimeout(resolve, t);
    });
}
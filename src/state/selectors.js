import { selector, selectorFamily } from "recoil";
import { getAllPokemons, getPokemonById } from "../api/pokemonApi";
import { gridItemsPerPageState, listItemsPerPageState, listModeState } from "./atoms";
import { ListModes } from "../enums/ListMode";

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
    get: (pokemonName) => async () => {
        await delay(500) // Fake delay to check spinner is working
        const response = await getPokemonById(pokemonName);
        return await response.json()
    },
});

export const currentItemsPerPage = selector({
    key: 'CurrentItemsPerPage',
    get: ({ get }) => {
        switch (get(listModeState)) {
            case ListModes.GRID: {
                return get(gridItemsPerPageState)
            }
            default:
                return get(listItemsPerPageState)
        }
    }
})


function delay(t) {
    return new Promise(resolve => {
        setTimeout(resolve, t);
    });
}
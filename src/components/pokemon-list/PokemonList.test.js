import React from "react";
import { render, screen } from "@testing-library/react";
import PokemonList from "./PokemonList";

// Mock the atoms
const mockListModeAtom = "mockListModeAtom";

const mockCurrentPageAtom = "mockCurrentPageAtom";

const mockPokemonListSelector = "mockPokemonListSelector";

const mockPokemon = {
  name: "bulbasaur",
  sprites: {
    other: {
      "official-artwork": {
        front_default: "http://localhost/Fake%20URL",
      },
    },
  },
};

const mockCurrentItemsPerPage = "mockCurrentItemsPerPage";

jest.mock("../../state/atoms", () => {
  const originalModule = jest.requireActual("../../state/atoms");
  return {
    ...originalModule,
    listModeState: "mockListModeAtom",
    currentPageState: "mockCurrentPageAtom",
  };
});

jest.mock("../../state/selectors", () => {
  const originalModule = jest.requireActual("../../state/selectors");
  return {
    ...originalModule,
    pokemonListSelector: "mockPokemonListSelector",
    pokemonSelector: "mockPokemonSelector",
    currentItemsPerPage: "mockCurrentItemsPerPage",
  };
});

// Mock the useRecoilValue function
jest.mock("recoil", () => {
  const originalModule = jest.requireActual("recoil");

  return {
    ...originalModule,
    useRecoilValue: jest.fn((atom) => {
      if (atom === mockListModeAtom) {
        return 0;
      }
      if (atom === mockCurrentPageAtom) {
        return 12; // Replace with your desired mock value
      }
      if (atom === mockPokemonListSelector) {
        return [
          { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
          { name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/" },
          { name: "venusaur", url: "https://pokeapi.co/api/v2/pokemon/3/" },
        ];
      }
      if (atom === mockPokemon) {
        return mockPokemon;
      }
      if (atom === mockCurrentItemsPerPage) {
        return 12;
      }
    }),
    useRecoilState: jest.fn((atom) => {
      if (atom === mockCurrentPageAtom) {
        return [1, jest.fn()];
      }
      if (atom === mockListModeAtom) {
        return [0, jest.fn()];
      }
      return;
    }),
  };
});

test("PokemonList renders correctly", () => {
  render(<PokemonList />);

  expect(screen.getByText("Bulbasaur")).toBeInTheDocument();
});

import { render, screen } from "@testing-library/react";
import Pokemon from "./Pokemon";

jest.mock("recoil", () => ({
  ...jest.requireActual("recoil"),
  useRecoilValue: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ pokemonName: "bulbasaur" }), // Provide your mock parameters here
  useNavigate: () => ({}),
}));

test("renders pokemon information", () => {
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

  // React Router Mocks
  const useParamsMock = jest.spyOn(require("react-router-dom"), "useParams");
  const mockParams = { pokemonName: "bulbasaur" };
  useParamsMock.mockReturnValue(mockParams);
  const useNavigateMock = jest.spyOn(
    require("react-router-dom"),
    "useNavigate"
  );
  useNavigateMock.mockReturnValue(() => {});

  // Recoil Mocks
  const useRecoilValueMock = require("recoil").useRecoilValue;
  useRecoilValueMock.mockReturnValue(mockPokemon);

  render(<Pokemon />);

  expect(screen.getByText(/Bulbasaur/i)).toBeInTheDocument();
  const image = screen.getByAltText(`Imatge del pokémon ${mockPokemon.name}`);
  expect(image.src).toContain(
    mockPokemon.sprites.other["official-artwork"].front_default
  );
});

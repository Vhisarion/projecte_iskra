import { render, screen } from "@testing-library/react";
import Homepage from "./Homepage";

test("renders title of page", () => {
  render(<Homepage />);
  const title = screen.getByText(/Llista de Pokémon de Joaquim Griñó/i);
  expect(title).toBeInTheDocument();
});

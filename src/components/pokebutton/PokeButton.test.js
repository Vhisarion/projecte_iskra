import { fireEvent, render, screen } from "@testing-library/react";
import PokeButton from "./PokeButton";

test("renders button text", () => {
  const onClickSpy = jest.fn();

  render(<PokeButton data="Test Button" onClick={onClickSpy} />);

  fireEvent.click(screen.getByRole("button"));
  expect(onClickSpy).toHaveBeenCalled();
});

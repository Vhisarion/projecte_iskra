import React from "react";
import { render, screen, act, waitFor } from "@testing-library/react";
import PokemonSuspense from "./PokemonSuspense";

// Mock the ErrorBoundary's onError callback (if needed)
jest.mock("react-error-boundary", () => ({
  ErrorBoundary: ({ children, onError }) => {
    return children;
  },
}));

// Mock de un component que causi la suspensió fins que haguem fet passar 1000ms amb els fake timers
function SuspenseComponent() {
  if (Date.now() - start >= 1000) {
    return <div>Content to be Suspended</div>;
  } else {
    throw Promise.resolve();
  }
}

let start;

test("PokemonSuspense renders fallback component", async () => {
  jest.useFakeTimers();
  start = Date.now();

  render(
    <PokemonSuspense>
      <SuspenseComponent />
    </PokemonSuspense>
  );

  // Assert that the initial fallback content (PokemonSpinner) is displayed
  expect(screen.getByTestId("pokemon-spinner")).toBeInTheDocument();

  // Fast forward time by one second
  await act(async () => {
    jest.advanceTimersByTime(2000);
  });

  // Wait for the child content to resolve after one second
  await waitFor(() => {
    expect(screen.getByText("Content to be Suspended")).toBeInTheDocument();
  });
});

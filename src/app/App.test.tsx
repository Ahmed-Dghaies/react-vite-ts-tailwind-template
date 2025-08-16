import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";

import App from "./App";

import { renderWithProviders } from "@/tests/utilities";

describe("App component", () => {
  it("renders welcome message", () => {
    renderWithProviders(<App />);
    expect(screen.getByText(/welcome to your new react/i)).toBeInTheDocument();
  });
});

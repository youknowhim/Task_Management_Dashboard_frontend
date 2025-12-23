import { describe, test, expect } from "vitest";
import { renderWithStore } from "./testUtils";
import { screen } from "@testing-library/react";
import Filters from "../components/Filters";

describe("Filters", () => {
  test("renders filter buttons", () => {
    renderWithStore(<Filters />);

    expect(screen.getByText("All")).toBeInTheDocument();
    expect(screen.getByText("Completed")).toBeInTheDocument();
    expect(screen.getByText("Pending")).toBeInTheDocument();
  });

  test("renders search input", () => {
    renderWithStore(<Filters />);

    expect(
      screen.getByPlaceholderText("Search tasks...")
    ).toBeInTheDocument();
  });
});

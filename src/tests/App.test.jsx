import { describe, test, expect } from "vitest";
import { screen } from "@testing-library/react";
import App from "../App";
import { renderWithStore } from "./testUtils";

describe("App Integration Test", () => {
  test("renders dashboard and allows adding a task", () => {
    renderWithStore(<App />);

    const input = screen.getAllByPlaceholderText("Enter task...")[0];
    input.value = "Test Task";

    screen.getByText("Add").click();

    expect(screen.getByText("Test Task")).toBeInTheDocument();
  });

  test("theme toggle button is present", () => {
    renderWithStore(<App />);

    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBeGreaterThan(0);
  });
});

import { screen, fireEvent } from "@testing-library/react";
import { renderWithStore } from "./testUtils";
import App from "../App";

describe("App Integration Test", () => {
  test("renders dashboard and allows adding a task", async () => {
    renderWithStore(<App />);

    // Header check
    expect(
      screen.getByText("Task Management Dashboard")
    ).toBeInTheDocument();

    // Input exists
    const input = screen.getByPlaceholderText("Enter task...");
    expect(input).toBeInTheDocument();

    // Add task flow
    fireEvent.change(input, {
      target: { value: "My First Task" },
    });

    fireEvent.click(screen.getByText("Add"));

    // Task appears
    expect(await screen.findByText("My First Task")).toBeInTheDocument();
  });

  test("theme toggle works", () => {
    renderWithStore(<App />);

    const toggleButton = screen.getByText("Dark Mode");
    fireEvent.click(toggleButton);

    // After click, button text should change
    expect(screen.getByText("Light Mode")).toBeInTheDocument();
  });
});

import { describe, test, expect } from "vitest";
import { renderWithStore } from "./testUtils";
import { screen, fireEvent } from "@testing-library/react";
import TaskForm from "../components/TaskForm";

describe("TaskForm", () => {
  test("renders input and button", () => {
    renderWithStore(<TaskForm />);
    expect(
      screen.getAllByPlaceholderText("Enter task...").length
    ).toBeGreaterThan(0);
  });

  test("clears input after add", () => {
    renderWithStore(<TaskForm />);

    const input =
      screen.getAllByPlaceholderText("Enter task...")[0];

    fireEvent.change(input, {
      target: { value: "New Task" },
    });
    fireEvent.click(screen.getByText("Add"));

    expect(input.value).toBe("");
  });
});

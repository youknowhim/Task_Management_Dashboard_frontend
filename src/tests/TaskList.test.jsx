import { describe, test, expect } from "vitest";
import { screen } from "@testing-library/react";
import { renderWithStore } from "./testUtils";
import TaskList from "../components/TaskList";

describe("TaskList", () => {
  test("renders list of tasks from store", () => {
    renderWithStore(<TaskList />);

    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build Task App")).toBeInTheDocument();
  });
});

import { describe, test, expect } from "vitest";
import { renderWithStore } from "./testUtils";
import { screen } from "@testing-library/react";
import TaskItem from "../components/TaskItem";

const task = { id: 1, title: "Sample Task", completed: false };

describe("TaskItem", () => {
  test("renders task title", () => {
    renderWithStore(<TaskItem task={task} />);
    expect(screen.getByText("Sample Task")).toBeInTheDocument();
  });

  test("renders action buttons", () => {
    renderWithStore(<TaskItem task={task} />);

    expect(
      screen.getByText("Mark as Completed")
    ).toBeInTheDocument();

    expect(screen.getByText("Edit")).toBeInTheDocument();
    expect(screen.getByText("Delete")).toBeInTheDocument();
  });
});

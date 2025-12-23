import { screen, fireEvent } from "@testing-library/react";
import TaskItem from "../components/TaskItem";
import { renderWithStore } from "./testUtils";

const task = { id: 1, title: "Sample Task", completed: false };

test("renders task title", () => {
  renderWithStore(<TaskItem task={task} />);
  expect(screen.getByText("Sample Task")).toBeInTheDocument();
});

test("toggles task status", () => {
  renderWithStore(<TaskItem task={task} />);

  fireEvent.click(screen.getByText("Done"));

  expect(screen.getByText("Pending")).toBeInTheDocument();
});

test("deletes task", () => {
  renderWithStore(<TaskItem task={task} />);

  fireEvent.click(screen.getByText("Delete"));

  expect(screen.queryByText("Sample Task")).not.toBeInTheDocument();
});

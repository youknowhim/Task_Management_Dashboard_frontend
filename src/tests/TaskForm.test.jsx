import { screen, fireEvent } from "@testing-library/react";
import TaskForm from "../components/TaskForm";
import { renderWithStore } from "./testUtils";

test("renders input and add button", () => {
  renderWithStore(<TaskForm />);

  expect(screen.getByPlaceholderText("Enter task...")).toBeInTheDocument();
  expect(screen.getByText("Add")).toBeInTheDocument();
});

test("adds task when valid input is given", () => {
  renderWithStore(<TaskForm />);

  fireEvent.change(screen.getByPlaceholderText("Enter task..."), {
    target: { value: "New Task" },
  });

  fireEvent.click(screen.getByText("Add"));

  expect(screen.getByText("New Task")).toBeInTheDocument();
});

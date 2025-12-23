import { screen } from "@testing-library/react";
import TaskList from "../components/TaskList";
import { renderWithStore } from "./testUtils";

test("renders list of tasks from store", async () => {
  renderWithStore(<TaskList />);

  expect(await screen.findByText(/Learn Redux Toolkit/i))
    .toBeInTheDocument();
});

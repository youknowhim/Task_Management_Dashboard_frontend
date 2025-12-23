import { screen, fireEvent } from "@testing-library/react";
import Filters from "../components/Filters";
import { renderWithStore } from "./testUtils";

test("renders filter buttons", () => {
  renderWithStore(<Filters />);

  expect(screen.getByText("all")).toBeInTheDocument();
  expect(screen.getByText("completed")).toBeInTheDocument();
  expect(screen.getByText("pending")).toBeInTheDocument();
});

test("search input updates", () => {
  renderWithStore(<Filters />);

  fireEvent.change(screen.getByPlaceholderText("Search..."), {
    target: { value: "redux" },
  });

  expect(screen.getByPlaceholderText("Search...").value).toBe("redux");
});

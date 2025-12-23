import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../app/store";

export const renderWithStore = (ui) =>
  render(<Provider store={store}>{ui}</Provider>);

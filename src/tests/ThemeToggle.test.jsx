import { render, screen, fireEvent } from "@testing-library/react";
import ThemeToggle from "../components/ThemeToggle";

test("toggles theme text", () => {
  let dark = false;
  const setDark = (val) => (dark = val);

  render(<ThemeToggle dark={dark} setDark={setDark} />);

  fireEvent.click(screen.getByText("Dark Mode"));

  expect(dark).toBe(true);
});

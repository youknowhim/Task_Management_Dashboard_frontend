import { describe, test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import ThemeToggle from "../components/ThemeToggle";

describe("ThemeToggle", () => {
  test("calls setDark on click", () => {
    let dark = false;
    const setDark = (value) => {
      dark = value;
    };

    render(<ThemeToggle dark={dark} setDark={setDark} />);

    fireEvent.click(screen.getByText("Dark Mode"));

    expect(dark).toBe(true);
  });
});

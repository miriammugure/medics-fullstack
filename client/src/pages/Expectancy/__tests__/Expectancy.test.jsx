import { render, screen } from "@testing-library/react";
import Expectancy from "../Expectancy";
import { describe, it, expect } from "vitest";

describe("Expectancy", () => {
  it("renders three button elements", () => {
    render(<Expectancy />);
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(3);
  });
});

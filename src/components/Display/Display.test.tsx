import React from "react";
import { render, screen } from "@testing-library/react";
import Display from "./Display";

describe("Display", () => {
  it("shows the given input and result", () => {
    render(<Display input="123" result="45" />);
    expect(screen.getByText("123")).toBeInTheDocument();
    expect(screen.getByText("= 45")).toBeInTheDocument();
  });

  it("handles long input without breaking layout", () => {
    const longInput = "12345678901234567890";
    render(<Display input={longInput} result="0" />);
    expect(screen.getByText(longInput)).toBeInTheDocument();
  });
});

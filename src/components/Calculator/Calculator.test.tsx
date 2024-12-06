import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Calculator from "./Calculator";

describe("Calculator", () => {
  it("shows initial display", () => {
    render(<Calculator />);
    const display = screen.getByTestId("displayInput");
    expect(display).toHaveTextContent("0");
  });

  it("performs a simple addition", () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText("1"));
    fireEvent.click(screen.getByText("+"));
    fireEvent.click(screen.getByText("2"));
    fireEvent.click(screen.getByText("="));
    const display = screen.getByTestId("displayOutput");
    expect(display).toHaveTextContent("3");
  });

  it("handles division by zero gracefully", () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText("4"));
    fireEvent.click(screen.getByText("÷"));
    fireEvent.click(screen.getByText("0"));
    fireEvent.click(screen.getByText("="));
    const display = screen.getByTestId("displayOutput");
    expect(display).toHaveTextContent("Undefined");
  });
});
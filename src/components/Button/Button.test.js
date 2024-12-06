import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";
// Mock CSS module
jest.mock("./Button.module.css", () => ({
    button: "button",
    number: "number",
    operator: "operator"
}));
describe("Button", () => {
    it("displays the correct label", () => {
        render(React.createElement(Button, { button: { label: "5", type: "number" }, onClick: () => { } }));
        expect(screen.getByText("5")).toBeInTheDocument();
    });
    it("calls onClick when clicked", () => {
        const onClick = jest.fn();
        render(React.createElement(Button, { button: { label: "+", type: "operator" }, onClick: onClick }));
        fireEvent.click(screen.getByText("+"));
        expect(onClick).toHaveBeenCalledTimes(1);
    });
});

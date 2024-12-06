import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./Home";
describe("Home Component", () => {
    it("renders the Home view with expected content", () => {
        render(React.createElement(Home, null));
        const heading = screen.getByText(/Calculator App/i);
        expect(heading).toBeInTheDocument();
    });
});

import { normaliseInput, calculateResult, toggleSign } from '../calculatorUtils/calculatorUtils.ts';

describe("normaliseInput", () => {
  it("replaces 'x' with '*'", () => {
    expect(normaliseInput("2x3")).toBe("2*3");
  });

  it("replaces '÷' with '/'", () => {
    expect(normaliseInput("6÷2")).toBe("6/2");
  });

  it("handles input with no special characters", () => {
    expect(normaliseInput("2+3")).toBe("2+3");
  });
});

describe("calculateResult", () => {
  it("correctly evaluates a simple expression", () => {
    expect(calculateResult("2+3")).toBe(5);
  });

  it("correctly evaluates expressions with replaced operators", () => {
    expect(calculateResult("2x3")).toBe(6);
    expect(calculateResult("6÷2")).toBe(3);
  });

  it("returns 'Undefined' for divisions by zero", () => {
    expect(calculateResult("5÷0")).toBe("Undefined");
  });

  it("returns 'Undefined' for invalid numeric operations", () => {
    expect(calculateResult("0÷0")).toBe("Undefined");
  });

  it("returns 'Error' for malformed expressions", () => {
    expect(calculateResult("2+")).toBe("Error");
    expect(calculateResult("abc")).toBe("Error");
  });
});

describe("toggleSign", () => {
  it("returns '-' if input is empty", () => {
    expect(toggleSign("")).toBe("-");
  });

  it("adds a '-' if input is positive", () => {
    expect(toggleSign("5")).toBe("-5");
  });

  it("removes '-' if input is already negative", () => {
    expect(toggleSign("-5")).toBe("5");
  });

  it("handles zero correctly", () => {
    expect(toggleSign("0")).toBe("-0"); // Although '-0' is odd, it shows sign toggling.
  });
});

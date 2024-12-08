import { evaluate } from "mathjs";

export function normaliseInput(input: string): string {
  return input.replace(/x/g, "*").replace(/÷/g, "/");
}

export function calculateResult(input: string): string | number {
  try {
    const evalInput = normaliseInput(input);
    const evalResult = evaluate(evalInput);
    if (evalResult === Infinity || evalResult === -Infinity || isNaN(evalResult)) {
      return "Undefined";
    }
    return evalResult;
  } catch {
    return "Error";
  }
}

export function toggleSign(input: string): string {
  if (!input) {
    return "-";
  }
  return input.startsWith("-") ? input.slice(1) : "-" + input;
}

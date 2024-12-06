import { evaluate } from "mathjs";
export function normaliseInput(input) {
    return input.replace(/x/g, "*").replace(/÷/g, "/");
}
export function calculateResult(input) {
    try {
        const evalInput = normaliseInput(input);
        const evalResult = evaluate(evalInput);
        if (evalResult === Infinity || evalResult === -Infinity || isNaN(evalResult)) {
            return "Undefined";
        }
        return evalResult;
    }
    catch {
        return "Error";
    }
}
export function toggleSign(input) {
    if (!input) {
        return "-";
    }
    return input.startsWith("-") ? input.slice(1) : "-" + input;
}

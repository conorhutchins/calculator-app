import { CalculatorButton } from "../types";

const buttonValues: CalculatorButton[][] = [
  [
    { label: "C", type: "action" },
    { label: "+/-", type: "action" },
    { label: "%", type: "operator" },
    { label: "÷", value: "/", type: "operator" },
  ],
  [
    { label: "7", type: "number" },
    { label: "8", type: "number" },
    { label: "9", type: "number" },
    { label: "x", value: "*", type: "operator" },
  ],
  [
    { label: "4", type: "number" },
    { label: "5", type: "number" },
    { label: "6", type: "number" },
    { label: "-", type: "operator" },
  ],
  [
    { label: "1", type: "number" },
    { label: "2", type: "number" },
    { label: "3", type: "number" },
    { label: "+", type: "operator" },
  ],
  [
    { label: ".", type: "number" },
    { label: "0", type: "number" },
    { label: "=", type: "action" },
  ],
];

export default buttonValues;

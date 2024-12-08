import React, { useState } from "react";
import Button from "../Button/Button";
import buttonValues from "../../data/buttonValues";
import Display from "../Display/Display";
import styles from "./Calculator.module.css";
import { calculateResult, toggleSign } from "../../utils/calculatorUtils/calculatorUtils";
const Calculator = () => {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");
    const handleClick = (button) => {
        const { label, type } = button;
        if (type === "action") {
            switch (label) {
                case "C":
                    setInput("");
                    setResult("");
                    break;
                case "=":
                    setResult(calculateResult(input));
                    break;
                case "+/-":
                    setInput((prev) => toggleSign(prev));
                    break;
                default:
                    break;
            }
        }
        else {
            setInput((prev) => prev + label);
        }
    };
    return (React.createElement("div", { className: styles.calculator },
        React.createElement(Display, { input: input, result: result }),
        React.createElement("div", { className: styles.buttons }, buttonValues.map((row, rowIndex) => (React.createElement("div", { key: rowIndex, className: styles.row }, row.map((button) => (React.createElement(Button, { key: button.label, button: button, onClick: handleClick })))))))));
};
export default Calculator;

import React, { useState } from "react";
import Button from "../Button/Button";
import buttonValues from "../../data/buttonValues";
import Display from "../Display/Display";
import { CalculatorButton } from "../../types";
import styles from "./Calculator.module.css";
import { calculateResult, toggleSign } from "../../utils/calculatorUtils/calculatorUtils";

const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<string | number>("");

  const handleClick = (button: CalculatorButton): void => {
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
    } else {
      setInput((prev) => prev + label);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display input={input} result={result} />
      <div className={styles.buttons}>
        {buttonValues.map((row, rowIndex) => (
          <div key={rowIndex} className={styles.row}>
            {row.map((button) => (
              <Button key={button.label} button={button} onClick={handleClick} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calculator;

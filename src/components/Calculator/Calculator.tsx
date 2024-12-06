import React, { useState } from "react";
import Button from "../Button/Button";
import buttonValues from "../../data/buttonValues";
import Display from "../Display/Display";
import { CalculatorButton } from "../../types";
import styles from "./Calculator.module.css";
import { evaluate } from "mathjs";

const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<string | number>("");

  const handleClick = (button: CalculatorButton): void => {
    const { label, value, type } = button;
  
    if (type === "action") {
      if (label === "C") {
        setInput("");
        setResult("");
      } else if (label === "=") {
        try {
          const evalResult = evaluate(input);
          if (evalResult === Infinity || evalResult === -Infinity || isNaN(evalResult)) {
            setResult("Undefined");
          } else {
            setResult(evalResult);
          }
        } catch {
          setResult("Undefined");
        }
      } else if (label === "+/-") {
        setInput((prev) => {
          if (!prev) {
            return "-";
          }
          return prev.startsWith("-") ? prev.slice(1) : "-" + prev;
        });
      }
    } else {
      setInput((prev) => prev + (value || label));
    }
  };

  return (
    <div className={styles.calculator}>
      <Display input={input} result={result} />
      <div className={styles.buttons}>
        {buttonValues.map((row, rowIndex) => (
          <div key={rowIndex} className={styles.row}>
            {row.map((button) => (
              <Button
                key={button.label}
                button={button}
                onClick={handleClick}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calculator;

import React, { useState } from "react";
import Button from "./Button";
import Display from "./Display";
import buttonValues from "../data/buttonValues";
import styles from "../styles/calculator.module.css";

const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<string | number>("");

  const handleClick = (value: string): void => {
    if (value === "=") {
      try {
        setResult(eval(input)); // eslint-disable-line no-eval
      } catch {
        setResult("Error");
      }
    } else if (value === "C") {
      setInput("");
      setResult("");
    } else {
      setInput((prev) => prev + value);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display input={input} result={result} />
      <div className={styles.buttons}>
        {buttonValues.map((btn) => (
          <Button key={btn} value={btn} onClick={handleClick} />
        ))}
      </div>
    </div>
  );
};

export default Calculator;

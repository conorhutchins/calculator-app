import React from "react";
import { DisplayProps } from "../../types";
import styles from "./Display.module.css";

const Display: React.FC<DisplayProps> = ({ input, result }) => {
  return (
    <div className={styles.display}>
      <div data-testid="displayInput"className={styles.input}>{input || "0"}</div>
      <div data-testid="displayOutput"className={styles.result}>{result !== "" && `= ${result}`}</div>
    </div>
  );
};

export default Display;

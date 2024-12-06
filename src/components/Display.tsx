import React from "react";
import { DisplayProps } from "../types";
import styles from "../styles/display.module.css";

const Display: React.FC<DisplayProps> = ({ input, result }) => {
  return (
    <div className={styles.display}>
      <div className={styles.input}>{input || "0"}</div>
      <div className={styles.result}>{result !== "" && `= ${result}`}</div>
    </div>
  );
};

export default Display;

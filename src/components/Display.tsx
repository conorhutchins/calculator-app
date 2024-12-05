import React from "react";
import { DisplayProps } from "../types";
import styles from "../styles/display.module.css";

const Display: React.FC<DisplayProps> = ({ input, result }) => {
  return (
    <div className={styles.display}>
      <div>{input || "0"}</div>
      <div>{result !== "" && `= ${result}`}</div>
    </div>
  );
};

export default Display;

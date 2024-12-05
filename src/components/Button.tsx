import React from "react";
import { ButtonProps } from "../types";
import styles from "../styles/button.module.css";

const Button: React.FC<ButtonProps> = ({ value, onClick }) => {
  return (
    <button onClick={() => onClick(value)} className={styles.button}>
      {value}
    </button>
  );
};

export default Button;

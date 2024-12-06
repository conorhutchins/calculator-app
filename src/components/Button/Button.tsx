import React from "react";
import styles from "./Button.module.css";
import { ButtonProps } from "../../types";

const Button: React.FC<ButtonProps> = ({ button, onClick }) => {
  const { label, type } = button;
  
  const buttonClass = `${styles.button} ${styles[type]}`;

  return (
    <button onClick={() => onClick(button)} className={buttonClass}>
      {label}
    </button>
  );
};

export default Button;

import React from "react";
import styles from "./Button.module.css";
const Button = ({ button, onClick }) => {
    const { label, type } = button;
    const buttonClass = `${styles.button} ${styles[type]}`;
    return (React.createElement("button", { onClick: () => onClick(button), className: buttonClass }, label));
};
export default Button;

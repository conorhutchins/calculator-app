import React from "react";
import styles from "./Display.module.css";
const Display = ({ input, result }) => {
    return (React.createElement("div", { className: styles.display },
        React.createElement("div", { "data-testid": "displayInput", className: styles.input }, input || "0"),
        React.createElement("div", { "data-testid": "displayOutput", className: styles.result }, result !== "" && `= ${result}`)));
};
export default Display;

import React from "react";
import Calculator from "../../components/Calculator/Calculator";
import styles from "./Home.module.css";
const Home = () => {
    return (React.createElement("div", { className: styles.home },
        React.createElement("h1", { className: styles.title }, "Calculator App"),
        React.createElement(Calculator, null)));
};
export default Home;

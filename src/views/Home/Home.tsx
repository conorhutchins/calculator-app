import React from "react";
import Calculator from "../../components/Calculator/Calculator";
import styles from "./Home.module.css";

const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      <h1 className={styles.title}>Calculator App</h1>
      <Calculator />
    </div>
  );
};

export default Home;

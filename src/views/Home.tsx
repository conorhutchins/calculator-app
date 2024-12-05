import React from "react";
import Calculator from "../components/Calculator";

const Home: React.FC = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Calculator App</h1>
      <Calculator />
    </div>
  );
};

export default Home;

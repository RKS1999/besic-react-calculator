import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleCalculate = () => {
    try {
      const res = eval(input);
      setInput(String(res));
      setResult("");
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#C0C0C0",
        borderRadius: "20px",
        paddingRight: "10px",
        paddingLeft: "10px",
        paddingBlockEnd: "20px",
      }}
    >
      <div className="calculator">
        <h4>Calculator</h4>
        <div className="display" style={{ borderRadius: "5px", height: "20px" }}>
          <div className="input">{input}</div>
          <div className="result">{result}</div>
        </div>
        <button
          onClick={handleClear}
          style={{
            width: "232px",
            backgroundColor: "red",
            margin: "10px",
            color: "white",
          }}
        >
          Clear
        </button>
        <div className="buttons">
          {[
            "1",
            "2",
            "3",
            "+",
            "4",
            "5",
            "6",
            "-",
            "7",
            "8",
            "9",
            "*",
            "0",
            ".",
            "=",
            "/",
          ].map((button) => (
            <button
              key={button}
              onClick={
                button === "=" ? handleCalculate : () => handleClick(button)
              }
            >
              {button}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;

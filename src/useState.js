import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function App() {
  const [selected, setSelected] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState("white");

  const handleClick = id => {
    setBackgroundColor(getRandomColor());
    setSelected(id);
  };

  return (
    <div className="container" style={{ backgroundColor }}>
      <div
        className={`box${selected === 1 ? " selected" : ""}`}
        onClick={() => handleClick(1)}
      />
      <div
        className={`box${selected === 2 ? " selected" : ""}`}
        onClick={() => handleClick(2)}
      />
      <div
        className={`box${selected === 3 ? " selected" : ""}`}
        onClick={() => handleClick(3)}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
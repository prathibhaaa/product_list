import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

function Counter() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  useEffect(() => {
    setInterval(() => {
      console.log(countRef.current);
    }, 1000);
  }, []);

  useEffect(() => {
    countRef.current = count;
  });

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count => count + 1)}>Add</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Counter />, rootElement);

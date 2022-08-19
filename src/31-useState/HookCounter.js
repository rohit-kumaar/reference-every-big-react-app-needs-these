import React, { useState } from "react";

function HookCounter() {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);

  const increaseAsync = () => {
    setTimeout(() => {
      setCount((currentNumber) => currentNumber + 1);
    }, 2000);
  };

  return (
    <div>
      <button onClick={increase}>Counter {count}</button>
      <button onClick={increaseAsync}>Async counter {count}</button>
    </div>
  );
}

export default HookCounter;

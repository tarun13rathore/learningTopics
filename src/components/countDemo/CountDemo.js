import React, { useState } from "react";

const CountDemo = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h5>{count}</h5>
      <button onClick={() => setCount(count + 1)}>Inc</button>
      <button onClick={() => setCount(count - 1)}>Dec</button>
    </div>
  );
};

export default CountDemo;

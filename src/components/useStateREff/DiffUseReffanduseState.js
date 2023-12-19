// how to create mutable variable which will not re-render the components
import React, { useEffect, useRef, useState } from "react";

const DiffUseReffanduseState = () => {
  const [data, setData] = useState("");
  //   const [count, setCount] = useState();
  const count = useRef(0);

  useEffect(() => {
    // setCount(count + 1);
    count.current = count.current + 1;
  });
  return (
    <div>
      <input
        type="text"
        // value={count}
        // onChange={(e) => setCount(e.target.value)}
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <p>This count how many times re-render: {count.current}</p>
      {/* <button onClick={() => setCount(count + 1)}>Inc</button>
      <button onClick={() => setCount(count - 1)}>Dec</button> */}
    </div>
  );
};

export default DiffUseReffanduseState;

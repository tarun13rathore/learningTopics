//how to access DOM directly using useReff

import React, { useRef, useState } from "react";

const Reff2 = () => {
  const [data, setData] = useState("");

  const inputEle = useRef("");
  const chnageStyle = () => {
    console.log("first", inputEle.current);
    inputEle.current.style.backgroundColor = "skyblue";
    inputEle.current.style.color = "red";
    inputEle.current.focus();
  };
  return (
    <div>
      <input
        ref={inputEle}
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
        // value={count}
        // onChange={(e) => setCount(e.target.value)}
      />
      <button
        onClick={chnageStyle}
        // style={{ width: "50px", height: "50px" }}
      >
        submit
      </button>
    </div>
  );
};

export default Reff2;

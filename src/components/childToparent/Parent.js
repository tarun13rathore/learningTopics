import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [data, setData] = useState("Parent data");

  const handler = (str) => {
    setData(str);
  };
  return (
    <div>
      <h3>Parent Comp</h3>
      {data}
      <Child hadler={handler} />
    </div>
  );
};

export default Parent;

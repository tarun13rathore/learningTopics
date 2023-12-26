import React from "react";

const Child = ({ hadler }) => {
  const childHandler = () => {
    const str = "child data";
    hadler(str);
  };
  return (
    <div>
      <h3>Child Comp</h3>
      <button onClick={childHandler}>Click</button>
    </div>
  );
};

export default Child;

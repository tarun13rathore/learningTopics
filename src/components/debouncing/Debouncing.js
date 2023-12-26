import React, { useEffect, useState } from "react";

const Debouncing = () => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      console.log("Delayed input value:", inputValue);
    }, 300);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [inputValue]);

  return (
    <>
      <p>Debouncing </p>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type something..."
      />
    </>
  );
};

export default Debouncing;
// Debouncing with setTimeout delay of 300ms

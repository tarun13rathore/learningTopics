import React, { useEffect, useState } from "react";

const Debouncing = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // Perform the action after the delay
      console.log("Delayed input value:", inputValue);
    }, 300);
    // Cleanup function to clear the timeout when the component unmounts or the dependency changes
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
        onChange={handleInputChange}
        placeholder="Type something..."
      />
    </>
  );
};

export default Debouncing;
// Debouncing with setTimeout delay of 300ms

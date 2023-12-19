import React, { useEffect, useState } from "react";

const Throttling = () => {
  const [inputValue, setInputValue] = useState("");
  const [isThrottled, setIsThrottled] = useState(false);

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    setIsThrottled(true);
  };

  useEffect(() => {
    if (isThrottled) {
      // Set a timeout to perform the action after 300ms
      const timeoutId = setTimeout(() => {
        // Perform the action after the delay
        console.log("Throttled input value:", inputValue);
        setIsThrottled(false); // Reset the throttling flag
      }, 300);

      // Cleanup function to clear the timeout when the component unmounts or the dependency changes
      return () => {
        clearTimeout(timeoutId); // Clear the timeout if the component unmounts or the dependency changes
      };
    }
  }, [inputValue, isThrottled]);

  return (
    <>
      <p>Throttling</p>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type something..."
      />
    </>
  );
};

export default Throttling;

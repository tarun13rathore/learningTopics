import React, { useRef, useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);
  const [run, setRun] = useState(false);

  const currVal = useRef();

  const startTimer = () => {
    if (!run) {
      currVal.current = setInterval(() => {
        setCount((pre) => pre + 1);
        setRun(true);
      }, 1000);
    }
  };

  const stopTimer = () => {
    if (run) {
      clearInterval(currVal.current);
      setRun(false);
    }
  };

  const resetTimer = () => {
    stopTimer();
    setCount(0);
  };

  return (
    <div class="text-center">
      <h1 class="text-4xl font-bold mb-4">{count}</h1>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        onClick={startTimer}
      >
        Start
      </button>
      <button
        class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
        onClick={stopTimer}
      >
        Stop
      </button>
      <button
        class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        onClick={resetTimer}
      >
        Reset
      </button>
    </div>
  );
};

export default Timer;

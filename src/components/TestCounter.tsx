import useCounterStore from "@/stores/useStore";
import React from "react";

const TestCounter: React.FC = () => {
  const { count, increment, decrement } = useCounterStore();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default TestCounter;

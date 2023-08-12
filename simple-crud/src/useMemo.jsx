import { useState, useMemo } from "react";

function Memo() {
  const [count, setCount] = useState(0);

  const factorial = useMemo(() => {
    console.log("Factorial calculation");
    let result = 1;
    for (let i = 1; i <= count; i++) {
      result *= i;
    }
    return result;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Factorial: {factorial}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Memo;

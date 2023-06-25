import React, { useState } from "react";

function Practice02() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>카운트 : {count}</div>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </>
  );
}

export default Practice02;

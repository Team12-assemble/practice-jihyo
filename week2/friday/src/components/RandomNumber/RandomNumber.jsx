import React, { useState } from "react";

const RandomNumber = ({ numRange }) => {
  const [num, setNum] = useState(0);

  const makeRandomNum = () => {
    const numLength = numRange.maxNum - numRange.minNum;
    console.log(numLength);
    const randomNum = Math.floor((Math.random() + numRange.minNum) * numLength);
    setNum(randomNum);
  };

  return (
    <>
      <button onClick={makeRandomNum}>Click</button>
      <h3>{num}</h3>
    </>
  );
};

export default RandomNumber;

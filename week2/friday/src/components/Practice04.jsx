import React, { useState, useEffect } from "react";

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn(!isOn);
  };
  return <button onClick={handleClick}>{isOn ? "켜짐" : "꺼짐"}</button>;
};

const Timer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
      console.log("clean up function works");
    };
  }, []);
  return <p>{count}</p>;
};

function Practice04() {
  return <Timer />;
}

export default Practice04;

import React, { useState, useEffect } from "react";

const TestScreen = ({ history }) => {
  const [moon, setMoon] = useState("Empty Moon");

  useEffect(() => {
    setMoon(() => {
      return "New Moon";
    });
    setTimeout(() => {
      setMoon("Half moon");
    }, 2000);
    setTimeout(() => {
      setMoon("full moon");
    }, 4000);
  }, []);
  console.log("SunScreen Ran");
  return (
    <div>
      {/* <p>This is SunScreen</p> */}
      <p>{moon}</p>
    </div>
  );
};

export default TestScreen;

import React, { useState } from "react";

function Toggle() {
  const [buttonOn, setButtonOn] = useState(false);
  return (
    <button
      style={
        buttonOn ? { backgroundColor: "red" } : { backgrounrColor: "white" }
      }
      onClick={() => {
        setButtonOn(!buttonOn);
      }}
    >
      {buttonOn ? "ON" : "OFF"}
    </button>
  );
}

export default Toggle;

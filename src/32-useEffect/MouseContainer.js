import React, { useState } from "react";
import HookMouse from "./HookMouse";

function MouseContainer() {
  const [display, setDisplay] = useState(true);
  return (
    <>
      <div>
        <button onClick={() => setDisplay(!display)}>Toggle Display</button>
        <div>{display && <HookMouse />}</div>
      </div>
    </>
  );
}

export default MouseContainer;

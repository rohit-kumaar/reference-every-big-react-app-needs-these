import { useState } from "react";

function useToggle() {
  const [value, setValue] = useState(true);
  function toggleValue(value) {
    setValue((currentValue) =>
      typeof value === "boolean" ? value : !currentValue
    );
  }

  return [value, toggleValue];
}

export default useToggle;

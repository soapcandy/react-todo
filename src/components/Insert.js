import { useState } from "react";

function Insert({ addInput }) {
  const [value, setValue] = useState();
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => addInput(value)}>입력</button>
    </div>
  );
}
export default Insert;

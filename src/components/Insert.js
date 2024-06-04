import { useState } from "react";

function Insert({ addInput }) {
  const [value, setValue] = useState("");
  const [id, setId] = useState(0);
  const handleAdd = () => {
    setId(id + 1);
    const newAdd = { id, value };
    addInput(newAdd);
    setValue("")
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button onClick={handleAdd}>입력</button>
    </div>
  );
}
export default Insert;

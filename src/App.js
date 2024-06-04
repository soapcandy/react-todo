import { useState } from "react";
import Insert from "./components/Insert";
import TodoList from "./components/TodoList";

function App() {
  const [input, setInput] = useState([]);
  const addInput = (newInput) => {
    setInput([...input, newInput]);
  };
  return (
    <div>
      <TodoList input={input} setInput={setInput} />
      <Insert addinput={addInput} />
    </div>
  );
}

export default App;

import { useState } from "react";

function TodoItem({ index, item, input, setInput }) {
  const [check, setCheck] = useState();

  const handleDelete = (index) => {
    const newTodoList = input.slice(0, index).concat(input.slice(index + 1));
    setInput(newTodoList);
  };

  return (
    <div>
      <li style={{ display: "flex" }}>
        <input
          type="checkbox"
          onClick={() => {
            setCheck(!check);
          }}
        />
        <div
          style={
            check ? { textDecoration: "line-through", opacity: 0.5 } : null
          }
        >
          {item}
        </div>
        <button onClick={() => handleDelete(index)}>삭제</button>
      </li>
    </div>
  );
}

export default TodoItem;

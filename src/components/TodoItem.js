import { useState } from "react";

function TodoItem({ item, input, setInput }) {
  const [check, setCheck] = useState(false);

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
          {item.value}
        </div>
        <button onClick={() => handleDelete(item.id)}>삭제</button>
      </li>
    </div>
  );
}

export default TodoItem;

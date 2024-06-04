import TodoItem from "./TodoItem";

function TodoList({ input, setInput }) {
  return (
    <div>
      {input.map((item) => (
        <TodoItem
          item={item}
          key={item.id}
          input={input}
          setInput={setInput}
        ></TodoItem>
      ))}
    </div>
  );
}
export default TodoList;

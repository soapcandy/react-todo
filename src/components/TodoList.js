import TodoItem from "./TodoItem";

function TodoList({ input, setInput }) {
  return (
    <div>
      {input.map((item, index) => (
        <TodoItem
          item={item}
          index={index}
          key={index}
          input={input}
          setInput={setInput}
        ></TodoItem>
      ))}
    </div>
  );
}
export default TodoList;

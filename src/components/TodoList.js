function TodoList({ input, setInput }) {
  const handleDelete = (index) => {
    const newTodoList = input.slice(0, index).concat(input.slice(index + 1));
    setInput(newTodoList);
  };

  return (
    <div>
      {input.map((item, index) => (
        <li style={{ display: "flex" }} key={index}>
          <input type="checkbox" />
          <div>{item}</div>
          <button onClick={() => handleDelete(index)}>삭제</button>
        </li>
      ))}
    </div>
  );
}
export default TodoList;

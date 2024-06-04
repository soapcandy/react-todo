function TodoList({ input }) {
  const testTodo = [
    {
      title: "제목",
    },
    {
      title: "제목2",
    },
  ];

  return (
    <div>
      {input.map((item, index) => (
        <li style={{ display: "flex" }} key={index}>
          <input type="checkbox" />
          <div>{item}</div>
        </li>
      ))}
    </div>
  );
}
export default TodoList;

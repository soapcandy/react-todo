function TodoList() {
  const testTodo = [
    {
      title: "제목",
      content: "내용",
    },
    {
      title: "제목2",
      content: "내용2",
    },
  ];

  return (
    <div>
      {testTodo.map((item) => (
        <div style={{ display: "flex" }}>
          <input type="checkbox" />
          <div>{item.title}</div>
          <div>{item.content}</div>
        </div>
      ))}
    </div>
  );
}
export default TodoList;

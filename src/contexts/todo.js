import { createContext } from "react";

const TodoContext = createContext({
  state: { input: "" },
  action: {
    setInput: () => {},
  },
});

export default TodoContext;

import React, { useCallback, useState } from "react";
import Todos from "../UseCallbackComponent/Todos";

export default function UseCallbackComponent() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, []);

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
    </>
  );
}

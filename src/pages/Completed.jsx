import { useContext } from "react";
import { TodoContext } from "../contexts/todo-context";

const Completed = () => {
  const { todos } = useContext(TodoContext);

  const completedTodos = todos.filter((todo) => todo.isCompleted);

  console.log(completedTodos);

  return (
    <div>
      {completedTodos.map((todo) => (
        <div key={todo.id}>{todo.text}</div>
      ))}
    </div>
  );
};

export default Completed;

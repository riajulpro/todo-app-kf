import { useContext } from "react";
import { TodoContext } from "../contexts/todo-context";

const Incompleted = () => {
  const { todos } = useContext(TodoContext);

  const incompletedTodo = todos?.filter((todo) => !todo.isCompleted);

  console.log(incompletedTodo);

  return (
    <div>
      {incompletedTodo?.map((todo) => (
        <div key={todo.id}>{todo.text}</div>
      ))}
    </div>
  );
};

export default Incompleted;

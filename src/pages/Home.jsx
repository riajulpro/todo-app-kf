import { useContext } from "react";
import { TodoContext } from "../contexts/todo-context";

const Home = () => {
  const { todos } = useContext(TodoContext);

  const handleCheck = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);

    const isCompleted = todos[index].isCompleted;

    if (isCompleted) {
      todos[index].isCompleted = false;
    } else {
      todos[index].isCompleted = true;
    }

    console.log(todos);
  };

  return (
    <div>
      {todos.length === 0
        ? "No todo found!"
        : todos.map((todo) => (
            <div key={todo.id}>
              <input type="checkbox" onChange={() => handleCheck(todo.id)} />{" "}
              <p>{todo.text}</p>
            </div>
          ))}
    </div>
  );
};

export default Home;

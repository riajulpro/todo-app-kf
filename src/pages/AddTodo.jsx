import { useContext, useState } from "react";
import { TodoContext } from "../contexts/todo-context";

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const { todos, setTodos } = useContext(TodoContext);

  const handleInputChange = (event) => {
    setTodo(event.target.value);
  };

  const handleAddTodo = () => {
    const newTodo = {
      id: todos?.length + 1,
      text: todo,
      isCompleted: false,
    };

    // todos.push(newTodo);
    setTodos((prev) => [...prev, newTodo]);

    setTodo("");
  };

  return (
    <div>
      <input
        className="border py-1 px-2 w-96"
        type="text"
        value={todo}
        onChange={handleInputChange}
        placeholder="Enter todo name here"
      />
      <button
        className="bg-violet-500 text-white py-1 px-3"
        onClick={handleAddTodo}
      >
        Add
      </button>
    </div>
  );
};

export default AddTodo;

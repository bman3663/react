import React from "react";
import { useTodo } from "../contexts";
import { useState } from "react";

function TodoForm() {
  const { addTodo } = useTodo();
  const [todo, setTodo] = useState("");

  const add = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ todo, completed: false });
    setTodo("");
  };
  return (
    <form onSubmit={add} className="flex">
      <div>
        <div>TodoForm</div>

        <input
          type="text"
          placeholder="Write todo..."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />

        <button type="Submit">Add</button>
      </div>
    </form>
  );
}

export default TodoForm;

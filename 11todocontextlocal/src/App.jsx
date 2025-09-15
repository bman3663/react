import { useEffect, useState } from "react";
import "./App.css";
import { TodoProvider } from "./contexts";
import { TodoForm, TodoItem } from "./components";
function App() {
  const [todos, setTodos] = useState([]);
  // above is crutial array of todos, thats being feeded into the context

  const addTodo = (todo) => {
    // code for the method contexts, takes string as input
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]); // this looks confusing, cuz "todo",
    // is the key name for the value as well as the arg, so doesnt need to explicitly be wrote - todo: todo
    // setter for todoArray, take prev array, using UPDATER FUNCTION PATTERN: (prev) => ...
    // {id: DAte, ... todo}, sets new todo id, the rest of values are taken from the spreading of the todo param
    // ^^ the todo param includes a todo(text) value and a completed value(false)
    // then add back to the prev array the ...x, spreads the array into its individula vlaules
  };

  const updateTodo = (id, todo) => {
    setTodos(
      (
        prev // UPDATER FUNCTION PATTERN
      ) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
      // x.map((prev) => (prev.id === x.id ? todo))
      // map though, run thruogh each todo item in todoArray,
      // using each todo obj in array as a var, if the ids match, change the todo text, else keep thesame
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
    // loop through, filter out todos w/ mathcing ids
  };

  const toggleComplete = (id) => {
    // id as a arg
    setTodos(
      (
        prev // updater fun insite sedtter
      ) =>
        prev.map(
          (
            prevTodo // loop through each todo
          ) =>
            prevTodo.id === id // if ids match
              ? { ...prevTodo, completed: !prevTodo.completed } // prevtodo gets spreaded, completed val gets opposited
              : prevTodo // else return same todoval
        )
    );
  };

  useEffect(() => {
    //LOADER
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []); // i beleive this empty case useEffect pourpose is to only execute upon startup

  useEffect(() => {
    // SAVER
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]); // i also beleive this updates the localStorage each time todos is changed

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <TodoForm />
      {todos.map((todo) => (
        <div key={todo.id}>
          <TodoItem todo={todo} />
        </div>
      ))}
    </TodoProvider>
  );
}

export default App;

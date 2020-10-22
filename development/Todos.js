import React, { useContext, useState } from "react";
import Cookies from "universal-cookie";
import { ADD_TODO, DispatchContext, StateContext, TOGGLE_TODO } from "./Provider";

const Todos = () => {
  return (
    <div>
      <Form />
      <List />
    </div>
  );
};

export default Todos;

const Form = () => {
  const [title, setTitle] = useState("");
  const dispatch = useContext(DispatchContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ADD_TODO, payload: title });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <button>Add</button>
      </form>

      <div
        onClick={() => {
          const c = new Cookies();
          c.remove("@todos");
        }}>
        Remove
      </div>
    </div>
  );
};

const List = () => {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  console.log("List -> state", state);

  if (!state || typeof state === "array") {
    return "... is empty";
  }

  return (
    <ul>
      {state.map((todo, key) => {
        return (
          <li key={key}>
            {todo.title} --{" "}
            {
              <span
                onClick={() => {
                  dispatch({ type: TOGGLE_TODO, payload: todo.id });
                }}>
                {todo.completed ? "Done" : "Pending"}
              </span>
            }
          </li>
        );
      })}
    </ul>
  );
};

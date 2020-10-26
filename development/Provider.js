import React, { createContext } from "react";
import useReducerPersisted from "../src";

export const StateContext = createContext([]);
export const DispatchContext = createContext();

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducerPersisted("@todos", redcer, [], "cookie");

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
    </StateContext.Provider>
  );
};

function redcer(state = [], { type, payload }) {
  switch (type) {
    case ADD_TODO:
      console.log("redcer -> state[state.length-1]", state[state.length - 1]);
      return [
        ...state,
        {
          id: state.length > 0 ? state[state.length - 1].id + 1 : 1,
          title: payload,
          completed: false,
        },
      ];
    case REMOVE_TODO:
      return state.filter((todo) => {
        todo.key !== payload;
      });
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === payload ? { ...todo, completed: !todo.completed } : todo
      );
    case EMPTY_TODOS:
      return [];
    default:
      return state;
  }
}

export const ADD_TODO = "ADD_TOTDO";
export const REMOVE_TODO = "REMOVE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const EMPTY_TODOS = "EMPTY_TODOS";

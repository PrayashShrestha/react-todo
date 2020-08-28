import React, { useReducer } from "react";
import TodoContext from "./TodoContext";
import TodoReducer from "./TodoReducer";
import { ADD_TODOS, DELETE_TODOS, EDIT_TODOS } from "../Types";

const TodoProvider = (props) => {
  //defining states as well as actions
  const initialState = {
    todos: [
      { id: 1, title: "eat" },
      { id: 2, title: "drink" },
      { id: 3, title: "feed" },
      { id: 4, title: "bath" },
      { id: 5, title: "drink" },
      { id: 6, title: "feed" },
      { id: 7, title: "bath" },
    ],
  };
  const [state, dispatch] = useReducer(TodoReducer, initialState);

  const AddTodos = (newTodo) => {
    dispatch({ type: ADD_TODOS, payload: newTodo });
  };

  const DeleteTodos = (id) => {
    dispatch({ type: DELETE_TODOS, payload: id });
  };

  const EditTodo = (todo) => {
    dispatch({ type: EDIT_TODOS, payload: todo });
  };
  return (
    <TodoContext.Provider
      value={{ todos: state.todos, AddTodos, DeleteTodos, EditTodo }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;

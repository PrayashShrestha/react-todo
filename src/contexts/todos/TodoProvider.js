import React, { useReducer, useState } from "react";
import TodoContext from "./TodoContext";
import TodoReducer from "./TodoReducer";
import { ADD_TODOS, DELETE_TODOS, EDIT_TODOS, FILTER_KEY } from "../Types";

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

  //state for handeling changes in input field
  const [localStates, setLocalState] = useState("");
  //states for handeling editing data
  const [editItem, setEditItem] = useState("");

  //text onChange event handler function
  const onChange = (e) => {
    setLocalState(e.target.value);
    console.log(localStates);
  };

  //finding item from id in the todo list to edit
  const findTodo = (idx) => {
    const todoUpdate = state.todos.find((todo) => todo.id === idx);
    console.log(todoUpdate);
    setLocalState(todoUpdate);
    setEditItem(todoUpdate);
    filterKey(todoUpdate); //action to filter out the value from the list
  };

  //using useReducer hook to initialize reducer
  const [state, dispatch] = useReducer(TodoReducer, initialState);

  //creating dispatch actions for reducer
  //-----------------------------------------------------------------------------------------------------------------
  const AddTodos = (newTodo) => {
    dispatch({ type: ADD_TODOS, payload: newTodo });
  };

  const DeleteTodos = (id) => {
    dispatch({ type: DELETE_TODOS, payload: id });
  };

  const EditTodo = (todo) => {
    console.log(todo);
    dispatch({ type: EDIT_TODOS, payload: todo });
  };

  const filterKey = (toUpdateValue) => {
    dispatch({ type: FILTER_KEY, payload: toUpdateValue });
  };
  //----------------------------------------------------------------------------------------------------------------------

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        localStates,
        setLocalState,
        editItem,
        setEditItem,
        findTodo,
        onChange,
        AddTodos,
        DeleteTodos,
        EditTodo,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;

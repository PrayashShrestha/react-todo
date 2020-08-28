import { ADD_TODOS, DELETE_TODOS, EDIT_TODOS } from "../Types";

export default (state, action) => {
  switch (action.type) {
    case ADD_TODOS:
      return {
        todos: [...state.todos, action.payload],
      };

    case DELETE_TODOS:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case EDIT_TODOS:
      const updatingTodo = action.payload;
      const updated = state.todos.map((todo) => {
        if (todo.id === updatingTodo.id) {
          return updatingTodo;
        }
        return todo;
      });
      return {
        ...state,
        todos: updated,
      };

    default:
      return state;
  }
};

import { ADD_TODOS, DELETE_TODOS, EDIT_TODOS, FILTER_KEY } from "../Types";

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
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case FILTER_KEY:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    default:
      return state;
  }
};

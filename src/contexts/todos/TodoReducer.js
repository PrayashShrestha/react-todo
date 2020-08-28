import { ADD_TODOS, DELETE_TODOS, EDIT_TODOS } from "../Types";

export default (state, action) => {
  switch (action.type) {
    case ADD_TODOS:
      return {
        todos: [...state.todos, action.payload],
      };

    case DELETE_TODOS:
      break;

    case EDIT_TODOS:
      break;

    default:
      return state;
  }
};

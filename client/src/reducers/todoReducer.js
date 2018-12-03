import {
  ADD_TODO,
  GET_TODOS,
  DELETE_TODO,
  LOADING
} from '../actions/types';

const initialState = {
  todos: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING: 
      return {
        ...state,
        loading: true
      };
    case ADD_TODO: 
      return {
        ...state,
        todos: [action.payload, ...state.todos]
      };
    case GET_TODOS:
      return {
        ...state,
        todos: action.payload
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo._id !== action.payload)
      };
    default:
      return state;
  }
}
import axios from 'axios';

import {
  ADD_TODO,
  GET_TODOS,
  DELETE_TODO,
  LOADING
} from './types';

export const addTodo = data => dispatch => {
  axios
    .post('/todos/', data)
    .then(res => 
      dispatch({
        type: ADD_TODO,
        payload: res.data
      })
    );
};

export const getTodos = () => dispatch => {
  axios
    .get('/todos/')
    .then(res => {
      dispatch({
        type: GET_TODOS,
        payload: res.data
      })
    })
};

export const deleteTodo = id => dispatch => {
  axios
    .delete(`/todos/${id}`)
    .then(res => 
      dispatch({
        type: DELETE_TODO,
        payload: id
      })
    )
};
export const loading = () => {
  return {type: LOADING}
};
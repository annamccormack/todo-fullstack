import {
getTodos,
addTodo,
updateTodo,
deleteTodo
} from '../apis/index'

import { showError } from './error'

export const FETCH_TODOS = 'FETCH_TODOS'
export const ADD_TODO = 'ADD_TODO'
export const UPDATE_TODO = 'UPDATE_TODO'
export const DELETE_TODO = 'DELETE_TODO'


export function fetchTodos () {
  return (dispatch) => {
    return getTodos()
    .then((todos) => {
      dispatch({
        type: FETCH_TODOS,
        todos: todos
      })
      return null
    })
    .catch((err) => {
        const errMessage = err.response?.text || err.message
        dispatch(showError(errMessage))
    })
  }
}

export function addNewTodo (newTodo) {
  return (dispatch) => {
    return addTodo(newTodo)
    .then((newTodo) => {
      dispatch({
        type: ADD_TODO,
        todo: newTodo
      })
      return null
    })
    .catch((err) => {
        const errMessage = err.response?.text || err.message
        dispatch(showError(errMessage))
    })
  }
}

export function updatedTodo (update) {
  return (dispatch) => {
    return updateTodo(update)
    .then((update) => {
      dispatch({
        type: UPDATE_TODO,
        todo: update
      })
      return null
    })
    .catch((err) => {
        const errMessage = err.response?.text || err.message
        dispatch(showError(errMessage))
    })
  }
}

export function deletedTodo (id) {
  return (dispatch) => {
    return deleteTodo(id)
    .then(() => {
      dispatch({
        type: DELETE_TODO,
        id: id
      })
      return null
    })
    .catch((err) => {
        const errMessage = err.response?.text || err.message
        dispatch(showError(errMessage))
    })
  }
}
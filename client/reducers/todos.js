import { 
  ADD_TODO, 
  DELETE_TODO, 
  FETCH_TODOS, 
  UPDATE_TODO, 
  } from '../actions/todos'

function todos (state = [], action) {
  switch (action.type) {
    case FETCH_TODOS:
      return action.todos
    case ADD_TODO:
      return [
        ...state,
        action.todo
      ] 
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id)
    case UPDATE_TODO:
      return getUpdatedTodoList(state, action.todo)
    default:
      return state
  }
}

function getUpdatedTodoList (todos, updatedTodos) {
  const { id, completed } = updatedTodo
  return todos.map((todo) => {
    const updateCompleted = (todo.id === id) ? completed : todo.completed
    return { ...todo, updateCompleted }
  })
}


export default todos
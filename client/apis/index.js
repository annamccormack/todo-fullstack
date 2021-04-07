import request from 'superagent'
const apiUrl = 'api/v1/todos'

// getTodos
export function getTodos () {
  return request.get(apiUrl)  
  .then(res => res.body)
}
// addTodos
export function addTodo (newTodo) {
  return request.post(apiUrl)
  .send(newTodo)
  .then(res => res.body)
}
// updateTodos
export function updateTodo (update) {
  return request.patch(apiUrl)
    .send(update)
    .then(res => res.body)
}
// deleteTodos
export function deleteTodo (id) {
  return request.del(apiUrl)
    .send({ id })
}
